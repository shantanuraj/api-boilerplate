/**
 * Server configuration
 */

import {
  IServerConnectionOptions,
} from 'hapi';

const config : IServerConnectionOptions = {
  port: process.env.PORT || 3000,
};

export default config;