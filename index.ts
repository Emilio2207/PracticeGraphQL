const books = [
  {
    title: "Titulo libro 1",
    author: "Emilio R.",
  },
  {
    title: "Titulo libro 2",
    author: "Victori V.",
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
