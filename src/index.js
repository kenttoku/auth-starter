const { GraphQLServer } = require('graphql-yoga');
const Query = require('./resolvers/Query');

const typeDefs = './src/schema.graphql';
const resolvers = {
  Query,
};


const server = new GraphQLServer({
  typeDefs,
  resolvers,
});

if (require.main === module) {
  server.start(() => console.log('Server is running'));
}
