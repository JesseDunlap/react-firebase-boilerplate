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
    firebase.initializeApp({
      // firebase config goes here...
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
