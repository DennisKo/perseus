import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import { ApolloServer } from "apollo-server-express";
import express from "express";

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael fds"
  }
];

const typeDefs = importSchema(`${__dirname}/schema.graphql`);

const resolvers = {
  Query: {
    books: () => books
  }
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: { endpoint: "/graphiql" }
});

const app = express();
server.applyMiddleware({ app, path: "*" });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
