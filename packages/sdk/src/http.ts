import { ZentaoApiError, ZentaoAuthError } from './errors.js'
import type { ZentaoClientOptions } from './types/config.js'

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface RequestOptions {
  method?: HttpMethod
  body?: unknown
  query?: Record<string, string | number | boolean | undefined | null>
  /** 本次请求是否不需要 Token */
  skipAuth?: boolean
  /** multipart/form-data 表单 */
  formData?: FormData
}

export class HttpClient {
  private token?: string
  private readonly apiBase: string
  private readonly timeout: number
  private readonly fetchFn: typeof fetch
  private readonly defaultHeaders: Record<string, string>

  constructor(options: ZentaoClientOptions) {
    const base = options.baseUrl.replace(/\/+$/, '')
    const version = options.apiVersion ?? 'v2'
    this.apiBase = `${base}/api.php/${version}`
    this.timeout = options.timeout ?? 30_000
    this.fetchFn = options.fetch ?? globalThis.fetch.bind(globalThis)
    this.defaultHeaders = { ...options.headers }
    this.token = options.token
  }

  getToken(): string | undefined {
    return this.token
  }

  setToken(token: string | undefined): void {
    this.token = token
  }

  get apiBaseUrl(): string {
    return this.apiBase
  }

  buildUrl(path: string, query?: RequestOptions['query']): string {
    const normalized = path.startsWith('/') ? path : `/${path}`
    const url = new URL(`${this.apiBase}${normalized}`)
    if (query) {
      for (const [key, value] of Object.entries(query)) {
        if (value !== undefined && value !== null) {
          url.searchParams.set(key, String(value))
        }
      }
    }
    return url.toString()
  }

  async request<T>(path: string, options: RequestOptions = {}): Promise<T> {
    const { method = 'GET', body, query, skipAuth = false, formData } = options
    const url = this.buildUrl(path, query)

    const headers: Record<string, string> = {
      ...this.defaultHeaders,
    }

    if (!skipAuth) {
      if (!this.token) {
        throw new ZentaoAuthError()
      }
      headers.Token = this.token
    }

    let payload: BodyInit | undefined
    if (formData) {
      payload = formData
    } else if (body !== undefined) {
      headers['Content-Type'] = 'application/json'
      payload = JSON.stringify(body)
    }

    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), this.timeout)

    try {
      const response = await this.fetchFn(url, {
        method,
        headers,
        body: payload,
        signal: controller.signal,
      })

      const text = await response.text()
      let data: unknown = undefined
      if (text) {
        try {
          data = JSON.parse(text) as unknown
        } catch {
          data = text
        }
      }

      if (!response.ok) {
        if (response.status === 401) {
          throw new ZentaoAuthError(
            typeof data === 'object' && data !== null && 'message' in data
              ? String((data as { message: unknown }).message)
              : '认证失败 (401)',
          )
        }
        throw ZentaoApiError.fromResponse(response.status, data)
      }

      return data as T
    } catch (error) {
      if (error instanceof ZentaoApiError) {
        throw error
      }
      if (error instanceof Error && error.name === 'AbortError') {
        throw new ZentaoApiError(408, `请求超时 (${this.timeout}ms)`)
      }
      throw error
    } finally {
      clearTimeout(timer)
    }
  }

  get<T>(path: string, query?: RequestOptions['query']): Promise<T> {
    return this.request<T>(path, { method: 'GET', query })
  }

  post<T>(path: string, body?: unknown, query?: RequestOptions['query']): Promise<T> {
    return this.request<T>(path, { method: 'POST', body, query })
  }

  put<T>(path: string, body?: unknown): Promise<T> {
    return this.request<T>(path, { method: 'PUT', body })
  }

  patch<T>(path: string, body?: unknown): Promise<T> {
    return this.request<T>(path, { method: 'PATCH', body })
  }

  delete<T>(path: string): Promise<T> {
    return this.request<T>(path, { method: 'DELETE' })
  }
}
