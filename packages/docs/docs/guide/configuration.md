# 配置

## ZentaoClientOptions

| 选项 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| `baseUrl` | `string` | 是 | 禅道站点根地址 |
| `apiVersion` | `'v1' \| 'v2'` | 否 | API 版本，默认 `v2` |
| `account` | `string` | 否 | 登录账号 |
| `password` | `string` | 否 | 登录密码 |
| `token` | `string` | 否 | 已有 Token |
| `timeout` | `number` | 否 | 超时毫秒数，默认 30000 |
| `fetch` | `typeof fetch` | 否 | 自定义 fetch |
| `headers` | `Record<string, string>` | 否 | 附加请求头 |

## 示例

```typescript
const client = new ZentaoClient({
  baseUrl: 'https://zentao.example.com',
  apiVersion: 'v2',
  timeout: 60_000,
  headers: {
    'X-Custom': 'value',
  },
})
```

API 根路径为：`{baseUrl}/api.php/v2`。
