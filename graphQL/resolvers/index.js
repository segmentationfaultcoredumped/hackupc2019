const tagsResolvers = require('./tags');
const chatsResolvers = require('./chats');
const usersResolvers = require('./users');

module.exports = {
    Query: {
        ...chatsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation
    }
};