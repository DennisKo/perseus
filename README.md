# Perseus - A React + GraphQL boilerplate

Perseus tries to supply a good starting point to build a Monorepo FullStack React/GraphQL App which can be deployed by a single command `now`.

The project combines:

- [Next.js](https://github.com/zeit/next.js/)
- [React Apollo](https://github.com/apollographql/react-apollo)
- [Apollo Server](https://github.com/apollographql/apollo-server)
- [Now 2.0](https://github.com/zeit/now-cli)
- [Yarn Workspaces](https://yarnpkg.com/lang/en/docs/workspaces/)
- [Apollo Codegen](https://github.com/apollographql/apollo-tooling)
- [Typescript](https://github.com/Microsoft/TypeScript)

---

**Install**

- clone this repo

- `yarn` in project root

**Develop**

Run these 2 in parallel:

`cd api && yarn dev`

`cd www && yarn dev`

**Generate Types (Client)**

After you made changes to your GraphQL schema:

`cd www && yarn gen` (while api running)

**Deploy**

One Time:

- Follow instructions on how to setup Now v2.0 https://zeit.co/docs/v2/getting-started/installation
- edit `./now.json` to your needs. set regions and name fields.

Deploy:
- `now` in project root

## WTF is Perseus?

> _In Greek mythology, Perseus (/ˈpɜːrsiəs, -sjuːs/; Greek: Περσεύς) is the legendary founder of Mycenae and of the Perseid dynasty, who, alongside Cadmus and Bellerophon, was the greatest Greek hero and slayer of monsters before the days of Heracles. He beheaded the Gorgon Medusa for Polydectes and saved Andromeda from the sea monster Cetus. He was the son of Zeus and the mortal Danaë, as well as the half-brother and great-grandfather of Heracles._
