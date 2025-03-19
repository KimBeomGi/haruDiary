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
import ProfileMainScreen from '../screens/profile/ProfileMainScreen';
import DetailPostScreen from '../screens/reads/DetailPostScreen';
import WritePostScreen from '../screens/wirtes/WritePostScreen';
import AiHaruScreen from '../screens/ai/AiHaruScreen';

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import SearchPostScreen from '../screens/reads/SearchPostScreen';
import ChartPostScreen from '../screens/reads/ChartPostScreen';
import BottomComponent from '../components/BottomComponent';

export type RootStackParamList = {
  // Home: NavigatorScreenParams<HomeTabParamList>;
  Home: undefined
  // PostDetails: { id: string };
  ProfileMain: undefined;
  DetailPost: undefined;
  WritePost: undefined;
  SearchPost: undefined;
  ChartPost: undefined;
  AiHaru : undefined;
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
          // animation : "fade"
          // animation : "none"
          animation : "slide_from_right"
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProfileMain" component={ProfileMainScreen} />
        <Stack.Screen name="DetailPost" component={DetailPostScreen} />
        <Stack.Screen name="WritePost" component={WritePostScreen} />
        <Stack.Screen name="SearchPost" component={SearchPostScreen} />
        <Stack.Screen name="ChartPost" component={ChartPostScreen} />
        <Stack.Screen name="AiHaru" component={AiHaruScreen} />
      </Stack.Navigator>
      <BottomComponent />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default AppNavigator;
