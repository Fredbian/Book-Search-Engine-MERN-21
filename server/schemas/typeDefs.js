// import apollo server
const { gql } = require('apollo-server-express')

// set up typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: String!
        title: String!
        authors: [String]
        description: String
        image: String
        link: String
    }

    input BookInput {
        bookId: String!
        title: String!
        authors: [String]
        description: String
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(book: BookInput): User
        removeBook(bookId: String!): User
    }
`

// export typeDefs
module.exports = typeDefs