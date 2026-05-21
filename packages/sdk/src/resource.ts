import type { HttpClient } from './http.js'
import type { PaginationParams } from './types/common.js'

export abstract class Resource {
  constructor(protected readonly http: HttpClient) {}

  protected paginationQuery(params?: PaginationParams) {
    return {
      page: params?.page,
      limit: params?.limit,
    }
  }
}
