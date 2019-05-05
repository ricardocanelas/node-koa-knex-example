# 😃 Simple example using Koa

Simple RESTful API implementation on Node.js + Express + Knex + Sqlite + Objection (ORM).

---

## 👉🏻 Prerequisites

- [Sqlite](https://www.sqlite.org)
- [NodeJs](https://nodejs.org/en/)

---

## 👉🏻 Getting Started


Clone the repo and use `yarn` to install dependecies

```bash
git clone https://github.com/ricardocanelas/node-koa-knex-example

cd node-koa-knex-example/

yarn install
```

```bash
yarn db:migration
yarn db:seed
```

Start server

```
yarn start
```

Then visit `http://localhost:3001`

**Test**

```
yarn test
```