/**
 * Instantiates and runs a server
 */

import { Server } from 'hapi';

import getServer from './server/server';

/**
 * Starts the server
 */
const start = async (server: Server) => {
  await server.start();
  console.log(`Server running at ${server.info.uri}`);
};

getServer().then(start);
