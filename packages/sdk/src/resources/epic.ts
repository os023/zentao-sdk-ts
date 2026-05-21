import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** EpicResource - 禅道 API v2 epic 模块 */
export class EpicResource extends Resource {
  /** 创建业务需求 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/epics`, data)
  }

  /** 修改业务需求 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/epics/${id}`, data)
  }

  /** 变更业务需求 */
  change<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/epics/${id}/change`, data)
  }

  /** 获取业务需求详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/epics/${id}`)
  }

  /** 获取产品业务需求列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/epics`, { ...this.paginationQuery(params) })
  }

  /** 关闭业务需求 */
  close<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/epics/${id}/close`, data)
  }

  /** 激活业务需求 */
  activate<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/epics/${id}/active`, data)
  }

  /** 删除业务需求 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/epics/${id}`)
  }
}
