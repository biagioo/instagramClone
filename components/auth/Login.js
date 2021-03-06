import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

import firebase from 'firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.onSignIn = this.SignIn.bind(this);
  }

  onSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.warn(result);
      })
      .catch(error => {
        console.warn(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder='email'
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          placeholder='password'
          secureTextEntry={true}
          onChangeText={password => this.setState({ password })}
        />

        <Button title='Sign In' onPress={() => this.onSignIn()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
