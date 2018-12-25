const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const { DATABASE_URL, JWT_SECRET } = require('./config');
const resolvers = require('./resolvers');

const typeDefs = './src/schema.graphql';


const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: incomingData => ({
    incomingData,
    isAuthorized: () => {
      const authHeader = incomingData.request.header('authorization');
      if (!authHeader) {
        throw new Error('Unauthorized');
      }
      const token = authHeader.replace('Bearer ', '');
      const decodedToken = jwt.verify(token, JWT_SECRET);
      return decodedToken;
    },
  }),
});

if (require.main === module) {
  mongoose.connect(DATABASE_URL, { useNewUrlParser: true });
  server.start(() => console.log('Server is running'));
}
