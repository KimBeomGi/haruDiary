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
  Button,
  Pressable,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';

// NavigationProp 타입을 설정합니다.
type HeaderComponentProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

function HeaderComponent({ navigation }: HeaderComponentProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable 
        onPress={() => {
          navigation.reset({
            index : 0,
            routes: [{ name: 'Home'}]
          })
        }}
      >
        <Text>홈으로 가보자</Text>
      </Pressable>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f8f8', // 예시 배경색
  },
});

export default HeaderComponent;
