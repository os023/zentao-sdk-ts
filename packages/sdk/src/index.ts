export { ZentaoClient } from './client.js'
export { HttpClient } from './http.js'
export type { HttpMethod, RequestOptions } from './http.js'
export { Resource } from './resource.js'
export { ZentaoApiError, ZentaoAuthError } from './errors.js'
export type { ZentaoApiErrorBody } from './errors.js'

export * from './resources/index.js'

export type {
  PaginationParams,
  PaginatedResponse,
  UserRef,
  StatusRef,
  TokenResponse,
  IdResponse,
} from './types/common.js'
export type { ApiVersion, ZentaoClientOptions } from './types/config.js'
export type { Bug, Product, Project, Execution, Task, Story, User } from './types/entities.js'
