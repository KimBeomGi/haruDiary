/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  useColorScheme,
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
import { Provider, useDispatch } from 'react-redux'

import HomeScreen from './src/screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import { isLightGet, isLightSet } from './src/asyncStorage/asyncStorage';

// react-native-paper-dates 적용
import { ko, registerTranslation } from 'react-native-paper-dates'
registerTranslation('ko', ko)
////// 또는
// import { registerTranslation } from 'react-native-paper-dates'
// registerTranslation('pl', {
//   save: 'Save',
//   selectSingle: 'Select date',
//   selectMultiple: 'Select dates',
//   selectRange: 'Select period',
//   notAccordingToDateFormat: (inputFormat) =>
//     `Date format must be ${inputFormat}`,
//   mustBeHigherThan: (date) => `Must be later then ${date}`,
//   mustBeLowerThan: (date) => `Must be earlier then ${date}`,
//   mustBeBetween: (startDate, endDate) =>
//     `Must be between ${startDate} - ${endDate}`,
//   dateIsDisabled: 'Day is not allowed',
//   previous: 'Previous',
//   next: 'Next',
//   typeInDate: 'Type in date',
//   pickDateFromCalendar: 'Pick date from calendar',
//   close: 'Close',
// })
//////////////////////

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
