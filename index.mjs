import { ApolloServer, gql } from 'apollo-server';
import { User, users, createUser, deleteUser } from './user.js';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
    email: String!
  }

  type Query {
    users: [User!]!
  }

  type Mutation {
    createUser(name: String!, age: Int!, email: String!): User!
    deleteUser(id: ID!): User
  }
`;

const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    createUser: (_, { name, age, email }) => {
      return createUser(name, age, email);
    },
    deleteUser: (_, { id }) => {
      return deleteUser(id);
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
