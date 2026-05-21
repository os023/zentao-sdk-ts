# 介绍

`@zentao/sdk` 是面向 [禅道 RESTful API v2.0](https://www.zentao.net/book/api/2309.html) 的 TypeScript SDK，用于在 Node.js 或浏览器环境中调用禅道接口。

## 特性

- 覆盖 API v2.0 全部资源模块（Bug、产品、项目、执行、任务、需求、测试等）
- 基于 `fetch` 的轻量 HTTP 客户端，支持自定义 `fetch` 与超时
- Token 认证与自动登录
- ESM / CJS 双格式输出，由 [tsdown](https://tsdown.dev) 构建
- 完整 TypeScript 类型

## 环境要求

- Node.js 18+
- 禅道实例需开启 RESTful API（`/api.php/v2`）

## 相关链接

- [禅道官方代码仓库](https://github.com/easysoft/zentaopms) — `easysoft/zentaopms`
- [API v2.0 使用教程](https://www.zentao.net/book/api/2309.html)
- [API v2.0 开发手册](https://www.zentao.net/book/api/1828.html)
