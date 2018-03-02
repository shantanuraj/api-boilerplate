/**
 * Server configuration
 */

import { ServerOptions } from 'hapi';

const config: ServerOptions = {
  port: process.env.PORT || 3000,
};

export default config;
