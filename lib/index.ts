import express from 'express';
import cors from 'cors';
import compression from 'compression';

import { graphqlHTTP as callGraph } from 'express-graphql';
import { buildSchema } from 'graphql';

import handleCustomErr from './err/handleCustomErr/handleCustomErr';
import debug from './debug/debug';

/*
 * Execute the load variables to process the PORT and
 * some other tokens.
 */
import './scripts/loadVariables.ts';

const server = express();
const port = process.env.PORT ?? 3000;
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(
  compression({
    level: 1,
    memLevel: 8,
  }),
);

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const rootValue = {
  hello: () => 'Hello World',
};

server.use(
  '/ql',
  callGraph({
    schema,
    customFormatErrorFn: handleCustomErr,
    rootValue,
    graphiql: true,
  }),
);

server.listen(port, async () => {
  debug(`Server listening on port ${port}`);
});
