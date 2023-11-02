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
// import { withAuthenticator, AmplifyTheme } from '@aws-amplify/ui-react-native';


import {Amplify} from 'aws-amplify';
import awsExports  from './src/aws-exports';

Amplify.configure(awsExports);

const App = () => {
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

export default App;