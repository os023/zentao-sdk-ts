# 其他模块

以下模块同样通过 `ZentaoClient` 访问，方法与路径遵循 RESTful 约定：

## Build（版本）

`client.build` — 创建、修改、列表、删除版本。

## Epic（业务需求）

`client.epic` — 产品业务需求 CRUD 与状态流转。

## Requirement（用户需求）

`client.requirement` — 用户需求管理。

## Feedback（反馈）

`client.feedback` — 产品反馈。

## Ticket（工单）

`client.ticket` — 工单管理。

## Testcase / Testtask

`client.testcase`、`client.testtask` — 测试用例与测试单。

## Program / Productplan / Release

`client.program`、`client.productplan`、`client.release` — 项目集、计划、发布。

## System / File

`client.system` — 应用；`client.file` — 附件上传（`FormData`）。

完整端点列表见 SDK 源码 `packages/sdk/src/resources/` 或[官方手册](https://www.zentao.net/book/api/1828.html)。
