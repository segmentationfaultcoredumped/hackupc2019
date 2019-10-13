const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphQL/typeDefs');
const resolvers = require('./graphQL/resolvers');
const { MONGODB } = require('./config.js')



const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true})
    .then(() => {
        return server.listen({ port: 7000 })
    })
    .then((res) => {
    console.log(`Server running at ${res.url}`);
    });

