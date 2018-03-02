/**
 * User route handlers
 */

import {
  Request,
  ResponseToolkit,
} from 'hapi';

const handlers = {
  // h is an optional parameter
  getUsers: (request: Request, _h: ResponseToolkit) => {
    return request.query;
  },

  login: (request: Request) => {
    console.log(request.payload);
    return ({ success: true });
  },
};

export default handlers;
