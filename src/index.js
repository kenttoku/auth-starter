const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const { DATABASE_URL } = require('./config');
const resolvers = require('./resolvers');

const typeDefs = './src/schema.graphql';

const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

if (require.main === module) {
  mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
  server.start(() => console.log('Server is running'));
}
