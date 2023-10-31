/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Router from './src/navigation/Router';
import { Amplify } from 'aws-amplify';
import { withAuthenticator, AmplifyTheme } from '@aws-amplify/ui-react-native';
import config from './src/aws-exports';

Amplify.configure(config);


const App = () => {
  // Auth.signOut();
  return (
    <SafeAreaView style={styles.root}>
      <Router />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
  },
});

export default (App);