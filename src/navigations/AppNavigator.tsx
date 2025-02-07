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

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderComponent from '../components/HeaderComponent';
import HomeScreen from '../screens/HomeScreen';
import TestScreen1 from '../screens/TestScreen1';
import TestScreen2 from '../screens/TestScreen2';
import TestScreen3 from '../screens/TestScreen2';
import ProfileMainScreen from '../screens/profile/ProfileMainScreen';
import DetailPostScreen from '../screens/reads/DetailPostScreen';
import WritePostScreen from '../screens/wirtes/WritePostScreen';

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import SearchPostScreen from '../screens/reads/SearchPostScreen';
import ChartPostScreen from '../screens/reads/ChartPostScreen';

export type RootStackParamList = {
  // Home: NavigatorScreenParams<HomeTabParamList>;
  Home: undefined
  // PostDetails: { id: string };
  Test1: undefined;
  Test2: undefined;
  Test3: undefined;
  ProfileMain: undefined;
  DetailPost: undefined;
  WritePost: undefined;
  SearchPost: undefined;
  ChartPost: undefined;
};

// export type HomeTabParamList = {
//   Popular: undefined;
//   Latest: undefined;
// };

const Stack = createNativeStackNavigator<RootStackParamList>();


function AppNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={() => ({
          header: () => <HeaderComponent />, // 여기서 navigation 전달
          // headerShown: true
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Test1" component={TestScreen1} />
        <Stack.Screen name="Test2" component={TestScreen2} />
        <Stack.Screen name="Test3" component={TestScreen3} />
        <Stack.Screen name="ProfileMain" component={ProfileMainScreen} />
        <Stack.Screen name="DetailPost" component={DetailPostScreen} />
        <Stack.Screen name="WritePost" component={WritePostScreen} />
        <Stack.Screen name="SearchPost" component={SearchPostScreen} />
        <Stack.Screen name="ChartPost" component={ChartPostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default AppNavigator;
