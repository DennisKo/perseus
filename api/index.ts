import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];

const typeDefs = importSchema(`${__dirname}/schema.graphql`)

const resolvers = {
  Query: {
    books: () => books
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: { endpoint: "/api" }
});

const app = express();

server.applyMiddleware({
  app,
  path: "/api"
});

const port = process.env.PORT || 8000;

app.listen({ port }, () =>
  console.log(`🚀 Server ready at ${server.graphqlPath}`)
);

export default app;
