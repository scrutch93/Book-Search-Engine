const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
      bookId: ID!
      authors: [String]
      description: String!
      image: String
      link: String
      title: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    profiles: {}
  }
  
  input BookInput {

    bookId: ID!
    authors: [String]
    description: String!
    image: String
    link: String
    title: String!
  }


  type Mutation {
  addUser(username: String!, email: String!, password: String!): Auth
  login(email: String!, password: String!): Auth

  saveBook(authors: [String], description: String!, title: String!, bookId: ID!, image: String, link: String!): User
  removeBook(bookID: ID!): Username
  }
  `;

  module.exports =typeDefs;
