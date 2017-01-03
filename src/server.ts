/**
 * API Server definition
 */

import { Server } from 'hapi';

import config from './config/server';

const server = new Server();

server.connection(config);

export default server;