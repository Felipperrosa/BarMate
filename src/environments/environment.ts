// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "YourApikey",
    authDomain: "auth-bar.firebaseapp.com",
    projectId: "auth-bar",
    storageBucket: "auth-bar.appspot.com",
    messagingSenderId: "110030099128",
    appId: "1:110030099128:web:fb71bef543470699355a4d",
    measurementId: "G-F9S37H8VDJ"
  },
  mapsKey: 'YourApikey',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
