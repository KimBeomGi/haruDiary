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

import { store } from '../../store/store';
import { Provider } from 'react-redux'

import HomeScreen from '../screens/HomeScreen';
import TestScreen1 from '../screens/TestScreen1';
import TestScreen2 from '../screens/TestScreen2';
import TestScreen3 from '../screens/TestScreen2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

export type RootStackParamList = {
  // Home: NavigatorScreenParams<HomeTabParamList>;
  Home: undefined
  // PostDetails: { id: string };
  Test1: undefined;
  Test2: undefined;
  Test3: undefined;
};

// export type HomeTabParamList = {
//   Popular: undefined;
//   Latest: undefined;
// };

const Stack = createNativeStackNavigator<RootStackParamList>();


function AppNavigator(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={({ route, navigation }) => ({
            headerShown: false,
            // gestureEnabled: true,
          })}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Test1" component={TestScreen1} />
          <Stack.Screen name="Test2" component={TestScreen2} />
          <Stack.Screen name="Test3" component={TestScreen3} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({

});

export default AppNavigator;
