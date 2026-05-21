import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** ProjectResource - 禅道 API v2 project 模块 */
export class ProjectResource extends Resource {
  /** 创建项目 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/projects`, data)
  }

  /** 修改项目 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/projects/${id}`, data)
  }

  /** 获取项目详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/projects/${id}`)
  }

  /** 获取项目列表 */
  list<T = unknown>(params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/projects`, { ...this.paginationQuery(params) })
  }

  /** 获取项目集的项目列表 */
  listByProgram<T = unknown>(programId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/programs/${programId}/projects`, { ...this.paginationQuery(params) })
  }

  /** 删除项目 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/projects/${id}`)
  }
}
