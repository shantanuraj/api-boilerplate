/**
 * Plugins for server
 */

const Good = require('good');

const goodOptions = {
  ops: { interval: 1000 },
  reporters: {
    consoleReporter: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*' }]
      },
      { module: 'good-console' },
      'stdout',
    ],
  },
};

export default [
  {
    register: Good,
    options: goodOptions,
  },
];