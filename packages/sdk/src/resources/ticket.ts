import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** TicketResource - 禅道 API v2 ticket 模块 */
export class TicketResource extends Resource {
  /** 创建工单 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/tickets`, data)
  }

  /** 修改工单 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/tickets/${id}`, data)
  }

  /** 获取工单详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/tickets/${id}`)
  }

  /** 获取产品工单列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/tickets`, { ...this.paginationQuery(params) })
  }

  /** 关闭工单 */
  close<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/tickets/${id}/close`, data)
  }

  /** 激活工单 */
  activate<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/tickets/${id}/active`, data)
  }

  /** 删除工单 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/tickets/${id}`)
  }
}
