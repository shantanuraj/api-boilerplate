/**
 * Server utility functions
 */

import {
  IRouteConfiguration,
} from 'hapi';

/**
 * Simple function to prefix routes with a given string
 * to reduce redundancy in route definitions.
 */
const prefixRoute = (prefix: string, route: IRouteConfiguration)
  : IRouteConfiguration => {

  const trimmedPath = (
    route.path.length > 1 && route.path.endsWith('/')
  ) ? route.path.slice(0, - 1) : route.path;

  return {...route, path: `/${prefix}${trimmedPath}`};
};

/**
 * Convinence function to prefix an array of routes.
 */
export const prefixRoutes = (prefix: string, routes: IRouteConfiguration[])
 : IRouteConfiguration[] => {
  return routes.map(route => prefixRoute(prefix, route));
};
