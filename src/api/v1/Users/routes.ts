/**
 * User routes
 */

import {
  IRouteConfiguration,
} from 'hapi';

import {
  prefixRoutes,
} from '../../../server/utils';

import handlers from './handlers';

const routes: IRouteConfiguration[] = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.getUsers,
  },
  {
    method: 'POST',
    path: '/login',
    handler: handlers.login,
  },
];

export default prefixRoutes('users', routes);