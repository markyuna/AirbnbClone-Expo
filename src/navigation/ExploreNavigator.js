import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import SearchResultsScreens from '../screens/SearchResults';
import SearchResultsTabNavigator from "./SearchResultsTabNavigator";

const Stack = createNativeStackNavigator();

const Router = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your destination',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;