import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** TestcaseResource - 禅道 API v2 testcase 模块 */
export class TestcaseResource extends Resource {
  /** 创建测试用例 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/testcases`, data)
  }

  /** 修改测试用例 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/testcases/${id}`, data)
  }

  /** 获取测试用例详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/testcases/${id}`)
  }

  /** 获取产品测试用例列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/testcases`, { ...this.paginationQuery(params) })
  }

  /** 获取项目测试用例列表 */
  listByProject<T = unknown>(projectId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/projects/${projectId}/testcases`, { ...this.paginationQuery(params) })
  }

  /** 获取执行测试用例列表 */
  listByExecution<T = unknown>(executionId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/executions/${executionId}/testcases`, { ...this.paginationQuery(params) })
  }

  /** 删除测试用例 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/testcases/${id}`)
  }
}
