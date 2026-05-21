# 禅道 RESTful API v2.0 TypeScript SDK

基于 [禅道 RESTful API v2.0](https://www.zentao.net/book/api/2309.html) 的 TypeScript SDK monorepo，使用 pnpm workspace 管理。

## 包结构

| 包 | 说明 |
| --- | --- |
| `@zentao/sdk` | TypeScript SDK，使用 [tsdown](https://tsdown.dev) 构建 |
| `@zentao/docs` | [Docusaurus](https://docusaurus.io) 文档站点 |

## 快速开始

```bash
pnpm install
pnpm build
```

### 使用 SDK

```typescript
import { ZentaoClient } from '@zentao/sdk'

const client = new ZentaoClient({
  baseUrl: 'https://your-zentao.example.com',
  account: 'admin',
  password: 'your-password',
})

await client.login()

const products = await client.product.list()
const bugs = await client.bug.listByProduct(1)
```

### 开发文档站

```bash
pnpm docs
```

## 官方 API 文档

- [API v2.0 使用教程](https://www.zentao.net/book/api/2309.html)
- [API v2.0 开发手册](https://www.zentao.net/book/api/1828.html)

## License

MIT
