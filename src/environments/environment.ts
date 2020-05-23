// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyDZ8CnVX4DY8Yps5E0srLMf2LMKHD1L6-8",
    authDomain: "angular-communities-9785d.firebaseapp.com",
    databaseURL: "https://angular-communities-9785d.firebaseio.com",
    projectId: "angular-communities-9785d",
    storageBucket: "angular-communities-9785d.appspot.com",
    messagingSenderId: "365490950824",
    appId: "1:365490950824:web:4d4d2ef801b6212e4ea89d" 
  },
  firestore:{
      COMMUNITIES_PATH: "communities-test"
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
