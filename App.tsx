/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AppNavigator from './src/navigations/AppNavigator';

import { store } from './store/store'
import { Provider } from 'react-redux'

import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';


function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default App;
