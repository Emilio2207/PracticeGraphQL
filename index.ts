import { ApolloServer } from '@apollo/server';
import { Query } from 'mysql2/typings/mysql/lib/protocol/sequences/Query';
import { startStandaloneServer } from '@apollo/server/standalone';

//---------------------------------------------------------------------------

const books = [
  {
    id: 1,
    title: 'Titulo libro 1',
    author: 'Emilio R.',
  },
  {
    id: 2,
    title: 'Titulo libro 2',
    author: 'Victori V.',
  },
];

const typeDefs = `
    type Book {
        id:ID
        title: String
        author: String
    }
    type Query {
        books:[Book]
        book(id:ID!): Book
    }
`;

const resolvers = {
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id === parseInt(args.id)),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`Server ready at: ${url}`);
