import React, { useEffect } from 'react';
import { Button, SafeAreaView, Text, View, BackHandler, Alert, StyleSheet, ScrollView } from 'react-native';
import { useFocusEffect, useNavigation, useNavigationState } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../store/counter/counterSlice';
import BottomComponent from '../components/BottomComponent';
import WriteBtnComponent from '../components/WriteBtnComponent';

import {getStyles} from '../styles/styles';
import { selectTab } from '../../store/bottom/bottomTabSlice';

// NavigationProp 타입을 설정합니다.
// type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type HomeScreenNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

function HomeScreen({ route, navigation}:HomeScreenNavigationProp): React.JSX.Element {
  // const navigation = useNavigation<HomeScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  const mode = useSelector((state: RootState) => state.theme.mode)
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  // const index = useNavigationState((state) => state.index) // stack index임
  
  // 작동 불량
  // useEffect(() => {
  //   const backAction = () => {
  //       Alert.alert("", "앱을 종료할까요?", [
  //         {
  //           text: '아니오',
  //           onPress: () => null,
  //           style: 'cancel',
  //         },
  //         {text: '네', onPress: () => BackHandler.exitApp()},
  //       ]);
  //       return true;
  //     };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(selectTab(0))
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])  
  );
    // useEffect(() => {
    //   dispatch(selectTab(3))
    // }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text>홈스크린</Text>
          <Text>잘되나</Text>
        </View>
      </ScrollView>
      <WriteBtnComponent />      
    </SafeAreaView>
  );
}
export default HomeScreen;