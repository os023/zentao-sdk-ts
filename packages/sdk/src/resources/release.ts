import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** ReleaseResource - 禅道 API v2 release 模块 */
export class ReleaseResource extends Resource {
  /** 创建发布 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/releases`, data)
  }

  /** 修改发布 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/releases/${id}`, data)
  }

  /** 获取发布详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/releases/${id}`)
  }

  /** 获取产品发布列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/releases`, { ...this.paginationQuery(params) })
  }

  /** 删除发布 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/releases/${id}`)
  }
}
