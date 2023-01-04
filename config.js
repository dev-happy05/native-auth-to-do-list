//firebase config key setup

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//Your web app's Firebase configuration

const firebaseConfig={
    apiKey: "AIzaSyD1c7Rzm2hrsNLSdJNspAWDxYlrLAD0x9w",
    authDomain: "test-1eab0.firebaseapp.com",
    projectId: "test-1eab0",
    storageBucket: "test-1eab0.appspot.com",
    messagingSenderId: "424247834211",
    appId: "1:424247834211:web:754c1bcf2a3972a783aa56",
    measurementId: "G-S9SCYR29W9"

}

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export {firebase};