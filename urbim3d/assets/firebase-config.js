/* Firebase web-app settings for the UrBIM 3D accounts (docs/ACCOUNTS-PLAN.md in the UrBIM3D repo).
   These values are public by design — every visitor's browser receives them. Security comes from the
   Firestore rules (UrBIM3D/website/firebase/firestore.rules), not from hiding them.
   Google Analytics (measurementId) is not loaded: the pages keep their own cookie-free statistics. */
window.URBIM_FIREBASE = {
    apiKey: "AIzaSyAu-nUC360fRlJIM-OKS5UL_NttOkW9kIo",
    authDomain: "urbim3d.firebaseapp.com",
    projectId: "urbim3d",
    storageBucket: "urbim3d.firebasestorage.app",
    messagingSenderId: "317007048402",
    appId: "1:317007048402:web:8668b78029dbce8ba5c70b"
};
