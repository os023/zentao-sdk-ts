# Story（需求）

| 方法 | HTTP | 路径 |
| --- | --- | --- |
| `create` | POST | `/stories` |
| `update` | PUT | `/stories/:id` |
| `change` | POST | `/stories/:id/change` |
| `get` | GET | `/stories/:id` |
| `listByProduct` | GET | `/products/:productId/stories` |
| `listByProject` | GET | `/projects/:projectId/stories` |
| `listByExecution` | GET | `/executions/:executionId/stories` |
| `close` | POST | `/stories/:id/close` |
| `activate` | POST | `/stories/:id/active` |
| `delete` | DELETE | `/stories/:id` |
