import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** ExecutionResource - 禅道 API v2 execution 模块 */
export class ExecutionResource extends Resource {
  /** 创建执行 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/executions`, data)
  }

  /** 修改执行 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/executions/${id}`, data)
  }

  /** 获取执行详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/executions/${id}`)
  }

  /** 获取执行列表 */
  list<T = unknown>(params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/executions`, { ...this.paginationQuery(params) })
  }

  /** 获取项目的执行列表 */
  listByProject<T = unknown>(projectId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/projects/${projectId}/executions`, { ...this.paginationQuery(params) })
  }

  /** 删除执行 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/executions/${id}`)
  }
}
