# Product

| 方法 | HTTP | 路径 |
| --- | --- | --- |
| `create` | POST | `/products` |
| `update` | PUT | `/products/:id` |
| `get` | GET | `/products/:id` |
| `list` | GET | `/products/all` |
| `listByProgram` | GET | `/programs/:programId/products` |
| `delete` | DELETE | `/products/:id` |

```typescript
const { products } = await client.product.list({ page: 1, limit: 50 })
```
