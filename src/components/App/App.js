import React, { Component } from 'react';

import firebase from 'firebase/app';
import 'firebase/auth';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from '../../reducers';
import { setLoggedIn, setUserInfo } from '../../actions/account';

import { RoutesContainer as Routes } from '../Routes';

class App extends Component {
  render() {
    if (true /* remove this block of code */) {
      throw new Error(
        'You have not configured Firebase. Please see src/components/App.js'
      );
    }

    /**
     * To get your Firebase config...
     * 1. Log in to the Firebase Console
     * 2. Create a Firebase app (if necessary)
     * 3. Click on the Authentication section
     * 4. Click on Web Setup
     * 5. Copy the Firebase config and paste it below.
     */

    firebase.initializeApp({
      // firebase config goes here...
    });

    firebase.firestore().settings({
      timestampsInSnapshots: true
    });

    const store = createStore(
      combineReducers(reducers),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        const { displayName, email, emailVerified, photoURL, uid, providerData } = user;
        store.dispatch(setUserInfo({ displayName, email, emailVerified, photoURL, uid, providerData }));
        store.dispatch(setLoggedIn(true));
      } else {
        store.dispatch(setLoggedIn(false));
      }
    });

    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
