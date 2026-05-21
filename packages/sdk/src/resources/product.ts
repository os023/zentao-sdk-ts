import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** ProductResource - 禅道 API v2 product 模块 */
export class ProductResource extends Resource {
  /** 创建产品 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/products`, data)
  }

  /** 修改产品 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/products/${id}`, data)
  }

  /** 获取产品详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/products/${id}`)
  }

  /** 获取产品列表 */
  list<T = unknown>(params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/all`, { ...this.paginationQuery(params) })
  }

  /** 获取项目集的产品列表 */
  listByProgram<T = unknown>(programId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/programs/${programId}/products`, { ...this.paginationQuery(params) })
  }

  /** 删除产品 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/products/${id}`)
  }
}
