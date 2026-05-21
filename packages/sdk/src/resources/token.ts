import { Resource } from '../resource.js'

/** TokenResource - 禅道 API v2 token 模块 */
export class TokenResource extends Resource {
  /** 获取 Token */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.request<T>(`/tokens`, { method: 'POST', body: data, skipAuth: true })
  }
}
