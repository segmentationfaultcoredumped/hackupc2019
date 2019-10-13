const tagsResolvers = require('./tags');
const chatsResolvers = require('./chats');
const usersResolvers = require('./users');

module.exports = {
    Query: {
        ...chatsResolvers.Query,
        ...tagsResolvers.Query,

    },
    Mutation: {
        ...usersResolvers.Mutation
    }
}