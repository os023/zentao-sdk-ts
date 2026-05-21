/** 分页查询参数 */
export interface PaginationParams {
  page?: number
  limit?: number
}

/** 分页列表响应 */
export type PaginatedResponse<TItem, TKey extends string = 'items'> = {
  page: number
  total: number
  limit: number
} & Record<TKey, TItem[]>

/** 用户引用 */
export interface UserRef {
  id: number
  account: string
  avatar?: string
  realname?: string
}

/** 状态引用 */
export interface StatusRef {
  code: string
  name: string
}

/** Token 响应 */
export interface TokenResponse {
  token: string
}

/** 通用 ID 响应 */
export interface IdResponse {
  id: number
}
