import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** TesttaskResource - 禅道 API v2 testtask 模块 */
export class TesttaskResource extends Resource {
  /** 创建测试单 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/testtasks`, data)
  }

  /** 修改测试单 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/testtasks/${id}`, data)
  }

  /** 获取测试单详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/testtasks/${id}`)
  }

  /** 获取产品测试单列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/testtasks`, { ...this.paginationQuery(params) })
  }

  /** 获取项目测试单列表 */
  listByProject<T = unknown>(projectId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/projects/${projectId}/testtasks`, { ...this.paginationQuery(params) })
  }

  /** 获取执行测试单列表 */
  listByExecution<T = unknown>(executionId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/executions/${executionId}/testtasks`, { ...this.paginationQuery(params) })
  }

  /** 删除测试单 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/testtasks/${id}`)
  }
}
