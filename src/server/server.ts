/**
 * API Server definition
 */

import { Server } from 'hapi';

import config from './config';
import plugins from './plugins';
import routes from './routes';

export default async (): Promise<Server> => {
  const server = new Server(config);
  await server.register(plugins);
  server.route(routes);
  return server;
};
