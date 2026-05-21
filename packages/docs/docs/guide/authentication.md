# 认证

禅道 API 使用 Token 认证。业务请求需在 Header 中携带 `Token` 字段。

## 自动登录

在创建客户端时传入账号密码，并调用 `login()`：

```typescript
import { ZentaoClient } from '@zentao/sdk'

const client = new ZentaoClient({
  baseUrl: 'https://zentao.example.com',
  account: 'admin',
  password: 'your-password',
})

await client.login()
```

## 使用已有 Token

```typescript
const client = new ZentaoClient({
  baseUrl: 'https://zentao.example.com',
  token: 'your-existing-token',
})

// 或
client.setToken('your-existing-token')
```

## 手动获取 Token

```typescript
const { token } = await client.token.create<{ token: string }>({
  account: 'admin',
  password: 'secret',
})
client.setToken(token)
```

若返回 401，表示 Token 无效或未携带，请重新调用 `login()`。
