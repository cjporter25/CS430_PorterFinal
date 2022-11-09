// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { initializeApp } from "firebase/app";

export const environment = {
  firebase: {
    apiKey: "AIzaSyDa_Na6sblxSbNu54_J0f-laeH0tvmCXbA",
    authDomain: "cs430final-2f73d.firebaseapp.com",
    projectId: "cs430final-2f73d",
    storageBucket: "cs430final-2f73d.appspot.com",
    messagingSenderId: "32330889045",
    appId: "1:32330889045:web:3079ed6d4f88362933a1dc"
  },
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
