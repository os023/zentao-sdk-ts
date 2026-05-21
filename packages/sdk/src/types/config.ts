export type ApiVersion = 'v1' | 'v2'

export interface ZentaoClientOptions {
  /** 禅道站点根地址，如 https://zentao.example.com */
  baseUrl: string
  /** API 版本，默认 v2 */
  apiVersion?: ApiVersion
  /** 登录账号（用于自动获取 Token） */
  account?: string
  /** 登录密码 */
  password?: string
  /** 已有 Token，设置后跳过 login */
  token?: string
  /** 请求超时（毫秒），默认 30000 */
  timeout?: number
  /** 自定义 fetch 实现 */
  fetch?: typeof fetch
  /** 额外请求头 */
  headers?: Record<string, string>
}
