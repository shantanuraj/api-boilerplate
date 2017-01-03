/**
 * User route handlers
 */

import {
  Request,
  IReply,
} from 'hapi';

const handlers = {
  getUsers: (request: Request, reply: IReply) => {
    reply(request.query);
  },

  login: (request: Request, reply: IReply) => {
    console.log(request.payload);
    reply({ success: true });
  },
};

export default handlers;