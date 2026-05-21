import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** UserResource - 禅道 API v2 user 模块 */
export class UserResource extends Resource {
  /** 获取用户列表 */
  list<T = unknown>(params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/users`, { ...this.paginationQuery(params) })
  }

  /** 获取用户详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/users/${id}`)
  }

  /** 创建用户 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/users`, data)
  }

  /** 修改用户 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/users/${id}`, data)
  }

  /** 删除用户 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/users/${id}`)
  }
}
