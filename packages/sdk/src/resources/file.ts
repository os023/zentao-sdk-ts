import { Resource } from '../resource.js'

/** FileResource - 禅道 API v2 file 模块 */
export class FileResource extends Resource {
  /** 上传附件 */
  upload<T = unknown>(formData: FormData): Promise<T> {
    return this.http.request<T>(`/files`, { method: 'POST', formData, skipAuth: false })
  }

  /** 编辑附件 */
  update<T = unknown>(id: number, data: Record<string, unknown>): Promise<T> {
    return this.http.put<T>(`/files/${id}`, data)
  }

  /** 删除附件 */
  delete<T = unknown>(id: number): Promise<T> {
    return this.http.delete<T>(`/files/${id}`)
  }
}
