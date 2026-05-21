export interface ZentaoApiErrorBody {
  error?: string
  message?: string
  code?: number | string
}

/**
 * 禅道 API 请求错误
 */
export class ZentaoApiError extends Error {
  readonly status: number
  readonly body: unknown

  constructor(status: number, message: string, body?: unknown) {
    super(message)
    this.name = 'ZentaoApiError'
    this.status = status
    this.body = body
  }

  static fromResponse(status: number, body: unknown): ZentaoApiError {
    const parsed = (typeof body === 'object' && body !== null ? body : {}) as ZentaoApiErrorBody
    const message =
      parsed.message ?? parsed.error ?? `禅道 API 请求失败 (${status})`
    return new ZentaoApiError(status, message, body)
  }
}

/**
 * 未登录或 Token 无效
 */
export class ZentaoAuthError extends ZentaoApiError {
  constructor(message = '未认证或 Token 无效，请先调用 login()') {
    super(401, message)
    this.name = 'ZentaoAuthError'
  }
}
