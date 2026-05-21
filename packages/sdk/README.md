# @zentao/sdk

禅道 RESTful API v2.0 的 TypeScript SDK。

## 安装

```bash
pnpm add @zentao/sdk
```

## 使用

```typescript
import { ZentaoClient } from '@zentao/sdk'

const client = new ZentaoClient({
  baseUrl: 'https://your-zentao.example.com',
  account: 'admin',
  password: 'secret',
})

await client.login()

const { products } = await client.product.list()
```

## API 版本

默认使用 `/api.php/v2` 路径。可通过 `apiVersion: 'v1'` 切换至 v1。

## 文档

参见 monorepo 根目录 `packages/docs` 或 [官方 API 文档](https://www.zentao.net/book/api/2309.html)。
