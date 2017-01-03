/**
 * API Server definition
 */

import { Server } from 'hapi';

import config from './config';
import plugins from './plugins';

export default async (): Promise<Server> => {
  const server = new Server();

  server.connection(config);
  await server.register(plugins);
  return server;
};