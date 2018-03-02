/**
 * Plugins for server
 */

import { ServerRegisterPluginObject } from 'hapi';

const goodOptions = {
  ops: { interval: 1000 },
  reporters: {
    consoleReporter: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }],
      },
      { module: 'good-console' },
      'stdout',
    ],
  },
};

const plugins: ServerRegisterPluginObject<any>[] = [
  {
    plugin: require('good'),
    options: goodOptions,
  },
];

export default plugins;
