import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
//---------------------------------------------------------------------------
const books = [
    {
        title: 'Titulo libro 1',
        author: 'Emilio R.',
    },
    {
        title: 'Titulo libro 2',
        author: 'Victori V.',
    },
];
const typeDefs = `
    type Book {
        title: String
        author: String
    }
    type Query {
        books:[Book]
    }
`;
const resolvers = {
    Query: {
        books: () => books,
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
