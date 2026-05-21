/**
 * 根据禅道 apiv1.php / apiv2.php 与官方 v2 文档生成资源模块
 */
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../src/resources')

const resources = [
  {
    name: 'token',
    className: 'TokenResource',
    methods: [
      { name: 'create', http: 'post', path: '/tokens', body: true, skipAuth: true, desc: '获取 Token' },
    ],
  },
  {
    name: 'user',
    className: 'UserResource',
    methods: [
      { name: 'list', http: 'get', path: '/users', paginated: true, listKey: 'users', desc: '获取用户列表' },
      { name: 'get', http: 'get', path: '/users/{id}', params: ['id: number'], desc: '获取用户详情' },
      { name: 'create', http: 'post', path: '/users', body: true, desc: '创建用户' },
      { name: 'update', http: 'put', path: '/users/{id}', params: ['id: number'], body: true, desc: '修改用户' },
      { name: 'delete', http: 'delete', path: '/users/{id}', params: ['id: number'], desc: '删除用户' },
    ],
  },
  {
    name: 'bug',
    className: 'BugResource',
    methods: [
      { name: 'create', http: 'post', path: '/bugs', body: true, desc: '创建 Bug' },
      { name: 'update', http: 'put', path: '/bugs/{id}', params: ['id: number'], body: true, desc: '修改 Bug' },
      { name: 'get', http: 'get', path: '/bugs/{id}', params: ['id: number'], desc: '获取 Bug 详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/bugs', params: ['productId: number'], paginated: true, listKey: 'bugs', desc: '获取产品 Bug 列表' },
      { name: 'listByProject', http: 'get', path: '/projects/{projectId}/bugs', params: ['projectId: number'], paginated: true, listKey: 'bugs', desc: '获取项目 Bug 列表' },
      { name: 'listByExecution', http: 'get', path: '/executions/{executionId}/bugs', params: ['executionId: number'], paginated: true, listKey: 'bugs', desc: '获取执行 Bug 列表' },
      { name: 'resolve', http: 'post', path: '/bugs/{id}/resolve', params: ['id: number'], body: true, desc: '解决 Bug' },
      { name: 'close', http: 'post', path: '/bugs/{id}/close', params: ['id: number'], body: true, desc: '关闭 Bug' },
      { name: 'activate', http: 'post', path: '/bugs/{id}/active', params: ['id: number'], body: true, desc: '激活 Bug' },
      { name: 'delete', http: 'delete', path: '/bugs/{id}', params: ['id: number'], desc: '删除 Bug' },
    ],
  },
  {
    name: 'build',
    className: 'BuildResource',
    methods: [
      { name: 'create', http: 'post', path: '/builds', body: true, desc: '创建版本/构建' },
      { name: 'update', http: 'put', path: '/builds/{id}', params: ['id: number'], body: true, desc: '修改版本' },
      { name: 'get', http: 'get', path: '/builds/{id}', params: ['id: number'], desc: '获取版本详情' },
      { name: 'listByProject', http: 'get', path: '/projects/{projectId}/builds', params: ['projectId: number'], paginated: true, listKey: 'builds', desc: '获取项目版本列表' },
      { name: 'listByExecution', http: 'get', path: '/executions/{executionId}/builds', params: ['executionId: number'], paginated: true, listKey: 'builds', desc: '获取执行版本列表' },
      { name: 'delete', http: 'delete', path: '/builds/{id}', params: ['id: number'], desc: '删除版本' },
    ],
  },
  {
    name: 'epic',
    className: 'EpicResource',
    methods: [
      { name: 'create', http: 'post', path: '/epics', body: true, desc: '创建业务需求' },
      { name: 'update', http: 'put', path: '/epics/{id}', params: ['id: number'], body: true, desc: '修改业务需求' },
      { name: 'change', http: 'post', path: '/epics/{id}/change', params: ['id: number'], body: true, desc: '变更业务需求' },
      { name: 'get', http: 'get', path: '/epics/{id}', params: ['id: number'], desc: '获取业务需求详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/epics', params: ['productId: number'], paginated: true, listKey: 'epics', desc: '获取产品业务需求列表' },
      { name: 'close', http: 'post', path: '/epics/{id}/close', params: ['id: number'], body: true, desc: '关闭业务需求' },
      { name: 'activate', http: 'post', path: '/epics/{id}/active', params: ['id: number'], body: true, desc: '激活业务需求' },
      { name: 'delete', http: 'delete', path: '/epics/{id}', params: ['id: number'], desc: '删除业务需求' },
    ],
  },
  {
    name: 'execution',
    className: 'ExecutionResource',
    methods: [
      { name: 'create', http: 'post', path: '/executions', body: true, desc: '创建执行' },
      { name: 'update', http: 'put', path: '/executions/{id}', params: ['id: number'], body: true, desc: '修改执行' },
      { name: 'get', http: 'get', path: '/executions/{id}', params: ['id: number'], desc: '获取执行详情' },
      { name: 'list', http: 'get', path: '/executions', paginated: true, listKey: 'executions', desc: '获取执行列表' },
      { name: 'listByProject', http: 'get', path: '/projects/{projectId}/executions', params: ['projectId: number'], paginated: true, listKey: 'executions', desc: '获取项目的执行列表' },
      { name: 'delete', http: 'delete', path: '/executions/{id}', params: ['id: number'], desc: '删除执行' },
    ],
  },
  {
    name: 'feedback',
    className: 'FeedbackResource',
    methods: [
      { name: 'create', http: 'post', path: '/feedbacks', body: true, desc: '创建反馈' },
      { name: 'update', http: 'put', path: '/feedbacks/{id}', params: ['id: number'], body: true, desc: '修改反馈' },
      { name: 'get', http: 'get', path: '/feedbacks/{id}', params: ['id: number'], desc: '获取反馈详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/feedbacks', params: ['productId: number'], paginated: true, listKey: 'feedbacks', desc: '获取产品反馈列表' },
      { name: 'close', http: 'post', path: '/feedbacks/{id}/close', params: ['id: number'], body: true, desc: '关闭反馈' },
      { name: 'activate', http: 'post', path: '/feedbacks/{id}/active', params: ['id: number'], body: true, desc: '激活反馈' },
      { name: 'delete', http: 'delete', path: '/feedbacks/{id}', params: ['id: number'], desc: '删除反馈' },
    ],
  },
  {
    name: 'file',
    className: 'FileResource',
    methods: [
      { name: 'upload', http: 'postForm', path: '/files', form: true, desc: '上传附件' },
      { name: 'update', http: 'put', path: '/files/{id}', params: ['id: number'], body: true, desc: '编辑附件' },
      { name: 'delete', http: 'delete', path: '/files/{id}', params: ['id: number'], desc: '删除附件' },
    ],
  },
  {
    name: 'product',
    className: 'ProductResource',
    methods: [
      { name: 'create', http: 'post', path: '/products', body: true, desc: '创建产品' },
      { name: 'update', http: 'put', path: '/products/{id}', params: ['id: number'], body: true, desc: '修改产品' },
      { name: 'get', http: 'get', path: '/products/{id}', params: ['id: number'], desc: '获取产品详情' },
      { name: 'list', http: 'get', path: '/products/all', paginated: true, listKey: 'products', desc: '获取产品列表' },
      { name: 'listByProgram', http: 'get', path: '/programs/{programId}/products', params: ['programId: number'], paginated: true, listKey: 'products', desc: '获取项目集的产品列表' },
      { name: 'delete', http: 'delete', path: '/products/{id}', params: ['id: number'], desc: '删除产品' },
    ],
  },
  {
    name: 'productplan',
    className: 'ProductplanResource',
    methods: [
      { name: 'create', http: 'post', path: '/productplans', body: true, desc: '创建产品计划' },
      { name: 'update', http: 'put', path: '/productplans/{id}', params: ['id: number'], body: true, desc: '修改产品计划' },
      { name: 'get', http: 'get', path: '/productplans/{id}', params: ['id: number'], desc: '获取产品计划详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/productplans', params: ['productId: number'], paginated: true, listKey: 'productplans', desc: '获取产品计划列表' },
      { name: 'delete', http: 'delete', path: '/productplans/{id}', params: ['id: number'], desc: '删除产品计划' },
    ],
  },
  {
    name: 'program',
    className: 'ProgramResource',
    methods: [
      { name: 'create', http: 'post', path: '/programs', body: true, desc: '创建项目集' },
      { name: 'update', http: 'put', path: '/programs/{id}', params: ['id: number'], body: true, desc: '修改项目集' },
      { name: 'get', http: 'get', path: '/programs/{id}', params: ['id: number'], desc: '获取项目集详情' },
      { name: 'list', http: 'get', path: '/programs', paginated: true, listKey: 'programs', desc: '获取项目集列表' },
      { name: 'delete', http: 'delete', path: '/programs/{id}', params: ['id: number'], desc: '删除项目集' },
    ],
  },
  {
    name: 'project',
    className: 'ProjectResource',
    methods: [
      { name: 'create', http: 'post', path: '/projects', body: true, desc: '创建项目' },
      { name: 'update', http: 'put', path: '/projects/{id}', params: ['id: number'], body: true, desc: '修改项目' },
      { name: 'get', http: 'get', path: '/projects/{id}', params: ['id: number'], desc: '获取项目详情' },
      { name: 'list', http: 'get', path: '/projects', paginated: true, listKey: 'projects', desc: '获取项目列表' },
      { name: 'listByProgram', http: 'get', path: '/programs/{programId}/projects', params: ['programId: number'], paginated: true, listKey: 'projects', desc: '获取项目集的项目列表' },
      { name: 'delete', http: 'delete', path: '/projects/{id}', params: ['id: number'], desc: '删除项目' },
    ],
  },
  {
    name: 'release',
    className: 'ReleaseResource',
    methods: [
      { name: 'create', http: 'post', path: '/releases', body: true, desc: '创建发布' },
      { name: 'update', http: 'put', path: '/releases/{id}', params: ['id: number'], body: true, desc: '修改发布' },
      { name: 'get', http: 'get', path: '/releases/{id}', params: ['id: number'], desc: '获取发布详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/releases', params: ['productId: number'], paginated: true, listKey: 'releases', desc: '获取产品发布列表' },
      { name: 'delete', http: 'delete', path: '/releases/{id}', params: ['id: number'], desc: '删除发布' },
    ],
  },
  {
    name: 'requirement',
    className: 'RequirementResource',
    methods: [
      { name: 'create', http: 'post', path: '/requirements', body: true, desc: '创建用户需求' },
      { name: 'update', http: 'put', path: '/requirements/{id}', params: ['id: number'], body: true, desc: '修改用户需求' },
      { name: 'change', http: 'post', path: '/requirements/{id}/change', params: ['id: number'], body: true, desc: '变更用户需求' },
      { name: 'get', http: 'get', path: '/requirements/{id}', params: ['id: number'], desc: '获取用户需求详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/requirements', params: ['productId: number'], paginated: true, listKey: 'requirements', desc: '获取产品用户需求列表' },
      { name: 'close', http: 'post', path: '/requirements/{id}/close', params: ['id: number'], body: true, desc: '关闭用户需求' },
      { name: 'activate', http: 'post', path: '/requirements/{id}/active', params: ['id: number'], body: true, desc: '激活用户需求' },
      { name: 'delete', http: 'delete', path: '/requirements/{id}', params: ['id: number'], desc: '删除用户需求' },
    ],
  },
  {
    name: 'story',
    className: 'StoryResource',
    methods: [
      { name: 'create', http: 'post', path: '/stories', body: true, desc: '创建需求' },
      { name: 'update', http: 'put', path: '/stories/{id}', params: ['id: number'], body: true, desc: '修改需求' },
      { name: 'change', http: 'post', path: '/stories/{id}/change', params: ['id: number'], body: true, desc: '变更需求' },
      { name: 'get', http: 'get', path: '/stories/{id}', params: ['id: number'], desc: '获取需求详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/stories', params: ['productId: number'], paginated: true, listKey: 'stories', desc: '获取产品需求列表' },
      { name: 'listByProject', http: 'get', path: '/projects/{projectId}/stories', params: ['projectId: number'], paginated: true, listKey: 'stories', desc: '获取项目需求列表' },
      { name: 'listByExecution', http: 'get', path: '/executions/{executionId}/stories', params: ['executionId: number'], paginated: true, listKey: 'stories', desc: '获取执行需求列表' },
      { name: 'close', http: 'post', path: '/stories/{id}/close', params: ['id: number'], body: true, desc: '关闭需求' },
      { name: 'activate', http: 'post', path: '/stories/{id}/active', params: ['id: number'], body: true, desc: '激活需求' },
      { name: 'delete', http: 'delete', path: '/stories/{id}', params: ['id: number'], desc: '删除需求' },
    ],
  },
  {
    name: 'system',
    className: 'SystemResource',
    methods: [
      { name: 'create', http: 'post', path: '/systems', body: true, desc: '创建应用' },
      { name: 'update', http: 'put', path: '/systems/{id}', params: ['id: number'], body: true, desc: '修改应用' },
      { name: 'get', http: 'get', path: '/systems/{id}', params: ['id: number'], desc: '获取应用详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/systems', params: ['productId: number'], paginated: true, listKey: 'systems', desc: '获取产品应用列表' },
    ],
  },
  {
    name: 'task',
    className: 'TaskResource',
    methods: [
      { name: 'create', http: 'post', path: '/tasks', body: true, desc: '创建任务' },
      { name: 'update', http: 'put', path: '/tasks/{id}', params: ['id: number'], body: true, desc: '修改任务' },
      { name: 'get', http: 'get', path: '/tasks/{id}', params: ['id: number'], desc: '获取任务详情' },
      { name: 'listByExecution', http: 'get', path: '/executions/{executionId}/tasks', params: ['executionId: number'], paginated: true, listKey: 'tasks', desc: '获取执行任务列表' },
      { name: 'start', http: 'post', path: '/tasks/{id}/start', params: ['id: number'], body: true, desc: '启动任务' },
      { name: 'finish', http: 'post', path: '/tasks/{id}/finish', params: ['id: number'], body: true, desc: '完成任务' },
      { name: 'close', http: 'post', path: '/tasks/{id}/close', params: ['id: number'], body: true, desc: '关闭任务' },
      { name: 'activate', http: 'post', path: '/tasks/{id}/active', params: ['id: number'], body: true, desc: '激活任务' },
      { name: 'delete', http: 'delete', path: '/tasks/{id}', params: ['id: number'], desc: '删除任务' },
    ],
  },
  {
    name: 'testcase',
    className: 'TestcaseResource',
    methods: [
      { name: 'create', http: 'post', path: '/testcases', body: true, desc: '创建测试用例' },
      { name: 'update', http: 'put', path: '/testcases/{id}', params: ['id: number'], body: true, desc: '修改测试用例' },
      { name: 'get', http: 'get', path: '/testcases/{id}', params: ['id: number'], desc: '获取测试用例详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/testcases', params: ['productId: number'], paginated: true, listKey: 'testcases', desc: '获取产品测试用例列表' },
      { name: 'listByProject', http: 'get', path: '/projects/{projectId}/testcases', params: ['projectId: number'], paginated: true, listKey: 'testcases', desc: '获取项目测试用例列表' },
      { name: 'listByExecution', http: 'get', path: '/executions/{executionId}/testcases', params: ['executionId: number'], paginated: true, listKey: 'testcases', desc: '获取执行测试用例列表' },
      { name: 'delete', http: 'delete', path: '/testcases/{id}', params: ['id: number'], desc: '删除测试用例' },
    ],
  },
  {
    name: 'testtask',
    className: 'TesttaskResource',
    methods: [
      { name: 'create', http: 'post', path: '/testtasks', body: true, desc: '创建测试单' },
      { name: 'update', http: 'put', path: '/testtasks/{id}', params: ['id: number'], body: true, desc: '修改测试单' },
      { name: 'get', http: 'get', path: '/testtasks/{id}', params: ['id: number'], desc: '获取测试单详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/testtasks', params: ['productId: number'], paginated: true, listKey: 'testtasks', desc: '获取产品测试单列表' },
      { name: 'listByProject', http: 'get', path: '/projects/{projectId}/testtasks', params: ['projectId: number'], paginated: true, listKey: 'testtasks', desc: '获取项目测试单列表' },
      { name: 'listByExecution', http: 'get', path: '/executions/{executionId}/testtasks', params: ['executionId: number'], paginated: true, listKey: 'testtasks', desc: '获取执行测试单列表' },
      { name: 'delete', http: 'delete', path: '/testtasks/{id}', params: ['id: number'], desc: '删除测试单' },
    ],
  },
  {
    name: 'ticket',
    className: 'TicketResource',
    methods: [
      { name: 'create', http: 'post', path: '/tickets', body: true, desc: '创建工单' },
      { name: 'update', http: 'put', path: '/tickets/{id}', params: ['id: number'], body: true, desc: '修改工单' },
      { name: 'get', http: 'get', path: '/tickets/{id}', params: ['id: number'], desc: '获取工单详情' },
      { name: 'listByProduct', http: 'get', path: '/products/{productId}/tickets', params: ['productId: number'], paginated: true, listKey: 'tickets', desc: '获取产品工单列表' },
      { name: 'close', http: 'post', path: '/tickets/{id}/close', params: ['id: number'], body: true, desc: '关闭工单' },
      { name: 'activate', http: 'post', path: '/tickets/{id}/active', params: ['id: number'], body: true, desc: '激活工单' },
      { name: 'delete', http: 'delete', path: '/tickets/{id}', params: ['id: number'], desc: '删除工单' },
    ],
  },
]

function buildMethod(m, resourceName) {
  const pathParams = (m.params ?? []).map((p) => {
    const [name, type] = p.split(':').map((s) => s.trim())
    return { name, type: type || 'number' }
  })
  const hasBody = m.body || m.form
  const hasPagination = m.paginated

  const args = []
  if (pathParams.length) args.push(...pathParams.map((p) => `${p.name}: ${p.type}`))
  if (hasBody && !m.form) args.push('data: Record<string, unknown>')
  if (m.form) args.push('formData: FormData')
  if (hasPagination) args.push('params?: PaginationParams')

  const pathExpr = m.path.replace(/\{(\w+)\}/g, (_, key) => `\${${key}}`)

  let call
  if (m.http === 'postForm') {
    call = `return this.http.request<T>(\`${pathExpr}\`, { method: 'POST', formData, skipAuth: false })`
  } else if (m.skipAuth) {
    call = `return this.http.request<T>(\`${pathExpr}\`, { method: '${m.http.toUpperCase()}', body: data, skipAuth: true })`
  } else if (hasPagination) {
    call = `return this.http.${m.http}<T>(\`${pathExpr}\`, ${hasBody ? 'data, ' : ''}{ ...this.paginationQuery(params) })`
  } else if (hasBody) {
    call = `return this.http.${m.http}<T>(\`${pathExpr}\`, data)`
  } else {
    call = `return this.http.${m.http}<T>(\`${pathExpr}\`)`
  }

  return `  /** ${m.desc} */
  ${m.name}<T = unknown>(${args.join(', ')}): Promise<T> {
    ${call}
  }`
}

mkdirSync(outDir, { recursive: true })

for (const r of resources) {
  const typeImport = hasPagination(r) ? "import type { PaginationParams } from '../types/common.js'\n" : ''
  const content = `import { Resource } from '../resource.js'
${typeImport}
/** ${r.className} - 禅道 API v2 ${r.name} 模块 */
export class ${r.className} extends Resource {
${r.methods.map((m) => buildMethod(m, r.name)).join('\n\n')}
}
`
  writeFileSync(join(outDir, `${r.name}.ts`), content)
}

function hasPagination(r) {
  return r.methods.some((m) => m.paginated)
}

const indexExports = resources
  .map((r) => `export { ${r.className} } from './${r.name}.js'`)
  .join('\n')
writeFileSync(join(outDir, 'index.ts'), indexExports + '\n')

console.log(`Generated ${resources.length} resource modules`)
