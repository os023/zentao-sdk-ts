import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** RequirementResource - 禅道 API v2 requirement 模块 */
export class RequirementResource extends Resource {
  /** 创建用户需求 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/requirements`, data)
  }

  /** 修改用户需求 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/requirements/${id}`, data)
  }

  /** 变更用户需求 */
  change<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/requirements/${id}/change`, data)
  }

  /** 获取用户需求详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/requirements/${id}`)
  }

  /** 获取产品用户需求列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/requirements`, { ...this.paginationQuery(params) })
  }

  /** 关闭用户需求 */
  close<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/requirements/${id}/close`, data)
  }

  /** 激活用户需求 */
  activate<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/requirements/${id}/active`, data)
  }

  /** 删除用户需求 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/requirements/${id}`)
  }
}
