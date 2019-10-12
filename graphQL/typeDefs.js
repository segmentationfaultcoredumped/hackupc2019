const { gql } = require('apollo-server');

module.exports = gql`
    type Tag {
        id:ID,
        name: String!,
        relatedTags: [String]
    }
    type User{
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput {
        username: String!
        password: String!
        confirmPassword: String!
        email: String!
        tags: [String]
    }
    type Query{
        getTags: [Tag]
    }
    type Mutation{
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
    }  
`;