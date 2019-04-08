import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import { ApolloServer } from "apollo-server";

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
  playground: { endpoint: "/api" }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
