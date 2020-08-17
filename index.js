const { ApolloServer, gql } = require('apollo-server');

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    type Student {
    name: String
    age: Int
    email: String
  }
  
  type Query {
    students: [Student]
  }
`;

const students = [
    {
        name: "Bilal",
        age: 36,
        email: "bilal@test.com"
    },
    {
        name: "Zaheer",
        age: 35,
        email: "zaheer@test.com"
    },
];
  
const resolvers = {
    Query: {
      students: () => students,
    },
};
  
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});