import { Resource } from '../resource.js'
import type { PaginationParams } from '../types/common.js'

/** ProgramResource - 禅道 API v2 program 模块 */
export class ProgramResource extends Resource {
  /** 创建项目集 */
  create<T = unknown>(data: Record<string, unknown>): Promise<T> {
    return this.http.post<T>(`/programs`, data)
  }

  /** 修改项目集 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/programs/${id}`, data)
  }

  /** 获取项目集详情 */
  get<T = unknown>(id: number): Promise<T> {
    return this.http.get<T>(`/programs/${id}`)
  }

  /** 获取项目集列表 */
  list<T = unknown>(params?: PaginationParams): Promise<T> {
    return this.http.get<T>(`/programs`, { ...this.paginationQuery(params) })
  }

  /** 删除项目集 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/programs/${id}`)
  }
}
