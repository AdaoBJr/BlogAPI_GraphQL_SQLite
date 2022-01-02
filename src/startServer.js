import { ApolloServer } from 'apollo-server';
import 'dotenv/config';

export default function startServer({ typeDefs, resolvers }) {
  const { SERVER_PORT } = process.env;

  const app = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => req.headers.authorization || '',
  });

  app.listen(SERVER_PORT, () =>
    console.log(`🔥 Server Running on http://localhost:${SERVER_PORT}/graphql`)
  );
}
