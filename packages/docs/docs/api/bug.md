# Bug

对应官方 [Bug 接口](https://www.zentao.net/book/api/1828.html)。

| 方法 | HTTP | 路径 |
| --- | --- | --- |
| `create` | POST | `/bugs` |
| `update` | PUT | `/bugs/:id` |
| `get` | GET | `/bugs/:id` |
| `listByProduct` | GET | `/products/:productId/bugs` |
| `listByProject` | GET | `/projects/:projectId/bugs` |
| `listByExecution` | GET | `/executions/:executionId/bugs` |
| `resolve` | POST | `/bugs/:id/resolve` |
| `close` | POST | `/bugs/:id/close` |
| `activate` | POST | `/bugs/:id/active` |
| `delete` | DELETE | `/bugs/:id` |

```typescript
const bugs = await client.bug.listByProduct(4, { page: 1, limit: 20 })
await client.bug.create({
  product: 4,
  title: '示例缺陷',
  severity: 3,
  pri: 2,
  type: 'codeerror',
})
```
