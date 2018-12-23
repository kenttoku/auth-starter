const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

const Query = require('./resolvers/query');
const Mutation = require('./resolvers/mutation');

const { DATABASE_URL } = require('./config');

const typeDefs = './src/schema.graphql';
const resolvers = {
  Query,
  Mutation,
};


const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

if (require.main === module) {
  mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
  server.start(() => console.log('Server is running'));
}
