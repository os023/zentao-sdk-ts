import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** StoryResource - 禅道 API v2 story 模块 */
export class StoryResource extends Resource {
  /** 创建需求 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/stories`, data)
  }

  /** 修改需求 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/stories/${id}`, data)
  }

  /** 变更需求 */
  change<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/stories/${id}/change`, data)
  }

  /** 获取需求详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/stories/${id}`)
  }

  /** 获取产品需求列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/stories`, { ...this.paginationQuery(params) })
  }

  /** 获取项目需求列表 */
  listByProject<T = unknown>(projectId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/projects/${projectId}/stories`, { ...this.paginationQuery(params) })
  }

  /** 获取执行需求列表 */
  listByExecution<T = unknown>(executionId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/executions/${executionId}/stories`, { ...this.paginationQuery(params) })
  }

  /** 关闭需求 */
  close<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/stories/${id}/close`, data)
  }

  /** 激活需求 */
  activate<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/stories/${id}/active`, data)
  }

  /** 删除需求 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/stories/${id}`)
  }
}
