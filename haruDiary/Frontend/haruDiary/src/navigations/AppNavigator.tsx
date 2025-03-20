/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
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

import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HeaderComponent from '../components/HeaderComponent';
import HomeScreen from '../screens/HomeScreen';
import ProfileMainScreen from '../screens/profile/ProfileMainScreen';
import DetailPostScreen from '../screens/reads/DetailPostScreen';
import WritePostScreen from '../screens/wirtes/WritePostScreen';
import AiHaruScreen from '../screens/ai/AiHaruScreen';
import SettingScreen from '../screens/setting/SettingScreen';

import type {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import SearchPostScreen from '../screens/reads/SearchPostScreen';
import ChartPostScreen from '../screens/reads/ChartPostScreen';
import BottomComponent from '../components/BottomComponent';
import LDModeScreen from '../screens/setting/LDModeScreen';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store/store'; 
import { isLightGet } from '../asyncStorage/asyncStorage';
import { setIsDarkMode, setTheme } from '../../store/theme/themeSlice';
import FontModeScreen from '../screens/setting/FontModeScreen';


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
  Setting : undefined;
  LDMode : undefined;
  FontMode : undefined;
};

// export type HomeTabParamList = {
//   Popular: undefined;
//   Latest: undefined;
// };

const Stack = createNativeStackNavigator<RootStackParamList>();


function AppNavigator(): React.JSX.Element {
  const dispatch = useDispatch()
  const systemColorScheme = useColorScheme() // 시스템모드 컬러
  
  // 각 스크린에 이것 달아주기?
  const mode = useSelector((state: RootState) => state.theme.mode)
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  // const [isLoading, setIsLoading] = useState(true); // 로딩 상태 추가
  ////////////////////////////
  

  // 화면 모드는 라이트모드, 다크모드, 시스템모드 3가지.
  // 현재 aysncstorage에 저장된 모드가 뭔지 확인, 저장된 모드가 없다면 기본은 라이트 모드
  useEffect(() => {
    const fetchMode = async () => {
      const value = await isLightGet()
      if(value){
        if(value.textName === '라이트 모드'){
          dispatch(setTheme('light'))
        }else if(value.textName === '다크 모드'){
          dispatch(setTheme('dark'))
        }else{
          dispatch(setTheme('system'))
        }
        // setIsLoading(false); // 테마 설정 완료 후 로딩 상태 변경
      }
    }
    fetchMode()
  }, [dispatch])
  // 각 모드에 따라 라이트모드-다크모드 여부를 확인
  useEffect(() => {
    // console.log('모드', mode)
    // console.log('이즈다크', isDarkMode)
    if(mode === 'system'){
      if(systemColorScheme === 'light'){ // 시스템모드가 라이트모드
        dispatch(setIsDarkMode(false))
      }else if(systemColorScheme === 'dark'){ // 시스템모드가 다크모드
        dispatch(setIsDarkMode(true))
      }
    }else if(mode === 'light'){ // 라이트모드
      dispatch(setIsDarkMode(false))
    }else if(mode === 'dark'){ // 다크모드
      dispatch(setIsDarkMode(true))
    }
    // console.log(isDarkMode, mode)
  }, [dispatch, mode, systemColorScheme])
  // 이후 이를 styles/styles.js에 적용
  // 이 style을 각 screen에 적용

  // if (isLoading) {
  //   // 로딩 중일 때 로딩 화면 표시
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }
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
        <Stack.Screen name="Home" component={HomeScreen} 
          options={{
            animation : "slide_from_left"
          }}
        />
        <Stack.Screen name="ProfileMain" component={ProfileMainScreen} />
        <Stack.Screen name="DetailPost" component={DetailPostScreen} />
        <Stack.Screen name="WritePost" component={WritePostScreen}
          options={{
            animation : "none"
          }}
        />
        <Stack.Screen name="SearchPost" component={SearchPostScreen} />
        <Stack.Screen name="ChartPost" component={ChartPostScreen} />
        <Stack.Screen name="AiHaru" component={AiHaruScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="LDMode" component={LDModeScreen} />
        <Stack.Screen name="FontMode" component={FontModeScreen} />
        
      </Stack.Navigator>
      <BottomComponent />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default AppNavigator;
