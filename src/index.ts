/**
 * Instantiates and runs a server
 */

import {
  Server,
} from 'hapi';

import server from './server/server';

/**
 * Starts the server
 */
const start = async (server: Server) => {
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

start(server);