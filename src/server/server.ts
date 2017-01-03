/**
 * API Server definition
 */

import { Server } from 'hapi';

import config from './config';

const server = new Server();

server.connection(config);

export default server;