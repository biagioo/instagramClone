import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './components/auth/Landing';

import * as firebase from 'firebase';
import RegisterScreen from './components/auth/Register';

const firebaseConfig = {
  apiKey: 'AIzaSyC-WXP3ogr_JrOfuVOLKKjSCtVbQxv89sU',
  authDomain: 'instagram-dev-b1b40.firebaseapp.com',
  projectId: 'instagram-dev-b1b40',
  storageBucket: 'instagram-dev-b1b40.appspot.com',
  messagingSenderId: '479036789440',
  appId: '1:479036789440:web:87a4a128eced9e00325325',
  measurementId: 'G-TMEZRDS0JC',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initailRouteName='Landing'>
          <Stack.Screen
            name='Landing'
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Register'
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
