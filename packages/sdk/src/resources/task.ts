import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** TaskResource - 禅道 API v2 task 模块 */
export class TaskResource extends Resource {
  /** 创建任务 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/tasks`, data)
  }

  /** 修改任务 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/tasks/${id}`, data)
  }

  /** 获取任务详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/tasks/${id}`)
  }

  /** 获取执行任务列表 */
  listByExecution<T = unknown>(executionId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/executions/${executionId}/tasks`, { ...this.paginationQuery(params) })
  }

  /** 启动任务 */
  start<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/tasks/${id}/start`, data)
  }

  /** 完成任务 */
  finish<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/tasks/${id}/finish`, data)
  }

  /** 关闭任务 */
  close<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/tasks/${id}/close`, data)
  }

  /** 激活任务 */
  activate<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/tasks/${id}/active`, data)
  }

  /** 删除任务 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/tasks/${id}`)
  }
}
