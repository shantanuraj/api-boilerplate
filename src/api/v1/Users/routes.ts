/**
 * User routes
 */

import {
  IRouteConfiguration,
} from 'hapi';

import * as Joi from 'joi';

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
    config: {
      validate: {
        payload: {
          username: Joi.string().required().description('Unique username of the user'),
          password: Joi.string().required().description('Password of the user'),
        },
      },
    },
    handler: handlers.login,
  },
];

export default prefixRoutes('users', routes);