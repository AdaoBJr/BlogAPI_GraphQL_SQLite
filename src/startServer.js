import { ApolloServer } from 'apollo-server';
import { Sequelize } from 'sequelize';
import 'dotenv/config';

export default function startServer({ typeDefs, resolvers }) {
  const { SERVER_PORT } = process.env;

  const sequelize = new Sequelize('test-db', 'user', 'pass', {
    dialect: 'sqlite',
    host: './dev.slqlite',
  });
  sequelize.sync().then(() => console.log('🎲 db is running'));

  const app = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => req.headers.authorization || '',
  });

  app.listen(SERVER_PORT, () =>
    console.log(`🔥 Server Running on http://localhost:${SERVER_PORT}/graphql`)
  );
}
