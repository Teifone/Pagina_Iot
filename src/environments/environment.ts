// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  IDENTITY_POOL_ID:'us-east-1:xxxxxxxxxxxxxxxxxxxxxxxxxxxx',
  REGION:'us-east-1',
  USER_POOL_ID:'us-east-1_xxxxxxxxxxxxxxxxxxxxxx',
  USER_POOL_WEB_CLIENT_ID:'xxxxxxxxxxxxxxxxxxxxxxxxx',
  MQTT_HOST:'wss://xxxxxxxxxxxxxxxxxxxxxxxxx/mqtt',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

