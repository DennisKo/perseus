This example combines:

- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
- [React Apollo](https://github.com/apollographql/react-apollo)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [Apollo Codegen](https://github.com/apollographql/apollo-tooling)
- [Next.js](https://github.com/zeit/next.js/)
- [Now 2.0](https://github.com/zeit/now-cli)
- [Typescript](https://github.com/Microsoft/TypeScript)

to build a Monorepo FullStack GraphQL App which can be deployed by a single command `now`.

---

**Install**

`yarn`

**Develop**

`cd api && yarn dev`

`cd www && yarn dev`

**Generate Types**

With api running

`cd www && yarn gen`

**Deploy**

- One Time: Follow instructions on how to setup Now v2.0 https://zeit.co/docs/v2/getting-started/installation

- `now` in project root
