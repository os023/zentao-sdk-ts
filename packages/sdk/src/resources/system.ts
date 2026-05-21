import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** SystemResource - 禅道 API v2 system 模块 */
export class SystemResource extends Resource {
  /** 创建应用 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/systems`, data)
  }

  /** 修改应用 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/systems/${id}`, data)
  }

  /** 获取应用详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/systems/${id}`)
  }

  /** 获取产品应用列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/systems`, { ...this.paginationQuery(params) })
  }
}
