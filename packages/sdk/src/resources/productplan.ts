import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** ProductplanResource - 禅道 API v2 productplan 模块 */
export class ProductplanResource extends Resource {
  /** 创建产品计划 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/productplans`, data)
  }

  /** 修改产品计划 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/productplans/${id}`, data)
  }

  /** 获取产品计划详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/productplans/${id}`)
  }

  /** 获取产品计划列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/productplans`, { ...this.paginationQuery(params) })
  }

  /** 删除产品计划 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/productplans/${id}`)
  }
}
