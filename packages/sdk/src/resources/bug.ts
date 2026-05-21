import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** BugResource - 禅道 API v2 bug 模块 */
export class BugResource extends Resource {
  /** 创建 Bug */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/bugs`, data)
  }

  /** 修改 Bug */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/bugs/${id}`, data)
  }

  /** 获取 Bug 详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/bugs/${id}`)
  }

  /** 获取产品 Bug 列表 */
  listByProduct<T = unknown>(productId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/products/${productId}/bugs`, { ...this.paginationQuery(params) })
  }

  /** 获取项目 Bug 列表 */
  listByProject<T = unknown>(projectId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/projects/${projectId}/bugs`, { ...this.paginationQuery(params) })
  }

  /** 获取执行 Bug 列表 */
  listByExecution<T = unknown>(executionId: number, params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/executions/${executionId}/bugs`, { ...this.paginationQuery(params) })
  }

  /** 解决 Bug */
  resolve<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/bugs/${id}/resolve`, data)
  }

  /** 关闭 Bug */
  close<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/bugs/${id}/close`, data)
  }

  /** 激活 Bug */
  activate<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/bugs/${id}/active`, data)
  }

  /** 删除 Bug */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/bugs/${id}`)
  }
}
