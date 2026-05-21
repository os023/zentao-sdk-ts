import type { StatusRef, UserRef } from './common.js'

/** Bug */
export interface Bug {
  id: number
  product: number
  branch?: number
  module?: number
  project?: number
  execution?: number
  title: string
  severity?: number
  pri?: number
  type?: string
  status?: StatusRef | string
  steps?: string
  openedBy?: UserRef
  openedDate?: string
  assignedTo?: UserRef | null
  [key: string]: unknown
}

/** 产品 */
export interface Product {
  id: number
  name: string
  code?: string
  status?: string
  [key: string]: unknown
}

/** 项目 */
export interface Project {
  id: number
  name: string
  code?: string
  status?: string
  [key: string]: unknown
}

/** 执行 */
export interface Execution {
  id: number
  name: string
  project?: number
  status?: string
  [key: string]: unknown
}

/** 任务 */
export interface Task {
  id: number
  name: string
  execution?: number
  status?: StatusRef | string
  [key: string]: unknown
}

/** 需求 */
export interface Story {
  id: number
  title: string
  product?: number
  status?: StatusRef | string
  [key: string]: unknown
}

/** 用户 */
export interface User {
  id: number
  account: string
  realname?: string
  [key: string]: unknown
}
