import { HttpClient } from './http.js'
import {
  BugResource,
  BuildResource,
  EpicResource,
  ExecutionResource,
  FeedbackResource,
  FileResource,
  ProductplanResource,
  ProductResource,
  ProgramResource,
  ProjectResource,
  ReleaseResource,
  RequirementResource,
  StoryResource,
  SystemResource,
  TaskResource,
  TestcaseResource,
  TesttaskResource,
  TicketResource,
  TokenResource,
  UserResource,
} from './resources/index.js'
import type { TokenResponse } from './types/common.js'
import type { ZentaoClientOptions } from './types/config.js'

/**
 * 禅道 RESTful API v2.0 客户端
 *
 * @example
 * ```ts
 * const client = new ZentaoClient({
 *   baseUrl: 'https://zentao.example.com',
 *   account: 'admin',
 *   password: 'secret',
 * })
 * await client.login()
 * const bugs = await client.bug.listByProduct(1)
 * ```
 */
export class ZentaoClient {
  readonly http: HttpClient
  private readonly options: ZentaoClientOptions

  readonly token: TokenResource
  readonly user: UserResource
  readonly bug: BugResource
  readonly build: BuildResource
  readonly epic: EpicResource
  readonly execution: ExecutionResource
  readonly feedback: FeedbackResource
  readonly file: FileResource
  readonly product: ProductResource
  readonly productplan: ProductplanResource
  readonly program: ProgramResource
  readonly project: ProjectResource
  readonly release: ReleaseResource
  readonly requirement: RequirementResource
  readonly story: StoryResource
  readonly system: SystemResource
  readonly task: TaskResource
  readonly testcase: TestcaseResource
  readonly testtask: TesttaskResource
  readonly ticket: TicketResource

  constructor(options: ZentaoClientOptions) {
    this.options = options
    this.http = new HttpClient(options)

    this.token = new TokenResource(this.http)
    this.user = new UserResource(this.http)
    this.bug = new BugResource(this.http)
    this.build = new BuildResource(this.http)
    this.epic = new EpicResource(this.http)
    this.execution = new ExecutionResource(this.http)
    this.feedback = new FeedbackResource(this.http)
    this.file = new FileResource(this.http)
    this.product = new ProductResource(this.http)
    this.productplan = new ProductplanResource(this.http)
    this.program = new ProgramResource(this.http)
    this.project = new ProjectResource(this.http)
    this.release = new ReleaseResource(this.http)
    this.requirement = new RequirementResource(this.http)
    this.story = new StoryResource(this.http)
    this.system = new SystemResource(this.http)
    this.task = new TaskResource(this.http)
    this.testcase = new TestcaseResource(this.http)
    this.testtask = new TesttaskResource(this.http)
    this.ticket = new TicketResource(this.http)
  }

  /** 使用账号密码获取 Token */
  async login(account?: string, password?: string): Promise<TokenResponse> {
    const response = await this.token.create<TokenResponse>({
      account: account ?? this.options.account ?? '',
      password: password ?? this.options.password ?? '',
    })
    this.http.setToken(response.token)
    return response
  }

  /** 设置 Token（跳过 login） */
  setToken(token: string): void {
    this.http.setToken(token)
  }

  /** 获取当前 Token */
  getToken(): string | undefined {
    return this.http.getToken()
  }

  /** API 根地址 */
  get apiBaseUrl(): string {
    return this.http.apiBaseUrl
  }
}
