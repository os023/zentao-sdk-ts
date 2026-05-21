# API 概览

`ZentaoClient` 按资源划分 API 模块，与[官方文档](https://www.zentao.net/book/api/1828.html)目录一致。

| 客户端属性 | 说明 |
| --- | --- |
| `client.token` | Token |
| `client.user` | 用户 |
| `client.bug` | Bug |
| `client.build` | 版本/构建 |
| `client.epic` | 业务需求 |
| `client.execution` | 执行 |
| `client.feedback` | 反馈 |
| `client.file` | 附件 |
| `client.product` | 产品 |
| `client.productplan` | 产品计划 |
| `client.program` | 项目集 |
| `client.project` | 项目 |
| `client.release` | 发布 |
| `client.requirement` | 用户需求 |
| `client.story` | 需求 |
| `client.system` | 应用 |
| `client.task` | 任务 |
| `client.testcase` | 测试用例 |
| `client.testtask` | 测试单 |
| `client.ticket` | 工单 |

## 通用调用模式

```typescript
// 列表（带分页）
const result = await client.bug.listByProduct(1, { page: 1, limit: 20 })

// 详情
const bug = await client.bug.get(9)

// 创建
const created = await client.bug.create({ product: 1, title: '标题', /* ... */ })

// 更新
await client.bug.update(9, { title: '新标题' })

// 动作
await client.bug.resolve(9, { resolution: 'fixed' })
```

各方法返回类型可通过泛型指定，或参考禅道官方 API 响应字段定义。
