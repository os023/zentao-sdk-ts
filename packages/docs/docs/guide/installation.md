# 安装

在 monorepo 内开发时，依赖已通过 workspace 链接：

```bash
pnpm install
pnpm build
```

在业务项目中安装（发布后）：

```bash
pnpm add @zentao/sdk
```

## 从源码构建 SDK

```bash
pnpm --filter @zentao/sdk build
```

构建产物位于 `packages/sdk/dist`。
