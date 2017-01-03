/**
 * User routes
 */

import {
  Request,
  IReply,
  IRouteConfiguration,
} from 'hapi';

import {
  prefixRoutes,
} from '../../../server/utils';

const routes: IRouteConfiguration[] = [
  {
    method: 'POST',
    path: '/login',
    handler: (request: Request, reply: IReply) => {
      console.log(request.payload);
      reply({ success: true });
    },
  },
];

export default prefixRoutes('users', routes);