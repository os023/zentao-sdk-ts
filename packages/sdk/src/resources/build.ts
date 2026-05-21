import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** BuildResource - 禅道 API v2 build 模块 */
export class BuildResource extends Resource {
  /** 创建版本/构建 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/builds`, data)
  }

  /** 修改版本 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/builds/${id}`, data)
  }

  /** 获取版本详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/builds/${id}`)
  }

  /** 获取项目版本列表 */
  listByProject<T = unknown>(projectId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/projects/${projectId}/builds`, { ...this.paginationQuery(params) })
  }

  /** 获取执行版本列表 */
  listByExecution<T = unknown>(executionId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/executions/${executionId}/builds`, { ...this.paginationQuery(params) })
  }

  /** 删除版本 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/builds/${id}`)
  }
}
