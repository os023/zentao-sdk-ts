import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** FeedbackResource - 禅道 API v2 feedback 模块 */
export class FeedbackResource extends Resource {
  /** 创建反馈 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/feedbacks`, data)
  }

  /** 修改反馈 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/feedbacks/${id}`, data)
  }

  /** 获取反馈详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/feedbacks/${id}`)
  }

  /** 获取产品反馈列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/feedbacks`, { ...this.paginationQuery(params) })
  }

  /** 关闭反馈 */
  close<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/feedbacks/${id}/close`, data)
  }

  /** 激活反馈 */
  activate<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/feedbacks/${id}/active`, data)
  }

  /** 删除反馈 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/feedbacks/${id}`)
  }
}
