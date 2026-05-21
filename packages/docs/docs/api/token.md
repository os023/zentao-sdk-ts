# Token

## `client.token.create(data)`

获取认证 Token。

- **方法**: `POST /tokens`
- **无需** Token Header

```typescript
const { token } = await client.token.create<{ token: string }>({
  account: 'admin',
  password: '123456',
})
```
