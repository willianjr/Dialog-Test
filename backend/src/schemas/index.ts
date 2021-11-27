import { ApolloServer, gql } from 'apollo-server'

export const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type User {
    _id: ID
    index: Int
    name: String!
    email: String
    age: Int
    eyeColor: String
    company: String
    phone: String
    greeting: String
    picture: String
    friends: [User]
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    list(name: String): [User!]
    user(user: ID!): User
  }
`
