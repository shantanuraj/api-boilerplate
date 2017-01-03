/**
 * Defines routes for the application.
 */

import * as fs from 'fs';

import {
  IRouteConfiguration,
} from 'hapi';

import {
  flatten,
} from 'ramda';

// We're using the 'glob' module here as we'll later use
// a directory deep-search wildcard.
import { sync as glob } from 'glob';

import {
  join as joinPaths,
} from 'path';

import {
  prefixRoutes,
} from './utils';

// Storing it as a constant here and then using it.
const routeFileWildcard = joinPaths(__dirname, '..', 'api/**/**/routes.js');

// An array containing all of the files matching the above defined directory search pattern.
const routeFilePaths = glob(routeFileWildcard);

// A simple function to get the nested directories in the api folder since
// they are the ones which contain the versions.
const apiVersions = (() => {
  const apiFolderPath = joinPaths(__dirname, '..', 'api');
  return fs.readdirSync(apiFolderPath)
    .filter(file => fs.statSync(joinPaths(apiFolderPath, file)).isDirectory());
})();

/**
 ** Creates an Object-to-Object mapping for all the pathspecs there. Every
 ** nested version directory is the key, with all of the route files as it's
 ** content.

 ** Example:
 ** { "v1": [ "../Users/route.js", "../Account/routes.js" ] }
**/
const apiVersionRoutes = apiVersions.reduce((acc, apiVersion) => {
  const routePaths = routeFilePaths.filter((routeFilePath) => {

    let versionToCheck = routeFilePath
      .replace(/.*?(?=\/api\/)/im, '')
      .replace('/api', '')
      .substring(1);

    versionToCheck = versionToCheck.substring(0, versionToCheck.indexOf('/'));
    return apiVersion === versionToCheck;
  });

  return { ...acc, [apiVersion]: routePaths };
}, {});

const routes: IRouteConfiguration[] = flatten(
  Object.keys(apiVersionRoutes).map((version) => {
    const routeFiles  = apiVersionRoutes[version];
    const versionRoutes = prefixRoutes(
      version,
      flatten(
        routeFiles.map((routeFile) => require(routeFile).default
      ) as IRouteConfiguration[],
    ));
    return versionRoutes;
  }),
);

export default routes;