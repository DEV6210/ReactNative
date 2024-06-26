/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { initializeApp } from '@react-native-firebase/app';


// Your Firebase config
const firebaseConfig = {
  apiKey: 'db46cbbf479aab852d5f6efe584a1be1ace2190d',
  authDomain: 'https://fcm.googleapis.com/v1/projects/myproject-b5ae1/messages:send',
  projectId: 'theand-cac5f',
  storageBucket: 'theand-cac5f.appspot.com',
  messagingSenderId: '83510925355',
  appId: '1:83510925355:android:558aa3e14bb9e50c1c726e',
};

// Initialize Firebase
initializeApp(firebaseConfig);
AppRegistry.registerComponent(appName, () => App);
