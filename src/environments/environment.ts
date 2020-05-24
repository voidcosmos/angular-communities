// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyAekY3N5j7_JHcJyBASaP8ApfAB0uDhVqg",
    authDomain: "angular-communities.firebaseapp.com",
    databaseURL: "https://angular-communities.firebaseio.com",
    projectId: "angular-communities",
    storageBucket: "angular-communities.appspot.com",
    messagingSenderId: "527493599469",
    appId: "1:527493599469:web:203c4cf32ef24bea343ce4",
    measurementId: "G-X20FFQVR7X"
  },
  firestore:{
      COMMUNITIES_PATH: "dev-communities"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
