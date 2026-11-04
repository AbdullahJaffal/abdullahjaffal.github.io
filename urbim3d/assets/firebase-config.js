/* Firebase web-app settings for the UrBIM 3D accounts (docs/ACCOUNTS-PLAN.md in the UrBIM3D repo).
   These values are public by design — security comes from the Firestore rules, not from hiding them.
   Paste the object from Firebase console › Project settings › Your apps › Web app › SDK setup (Config).
   While this stays null, the account pages say "accounts are not open yet" and nothing is sent anywhere. */
window.URBIM_FIREBASE = null;
/* Example:
window.URBIM_FIREBASE = {
    apiKey: "…", authDomain: "urbim3d.firebaseapp.com", projectId: "urbim3d",
    storageBucket: "urbim3d.appspot.com", messagingSenderId: "…", appId: "…"
};
*/
