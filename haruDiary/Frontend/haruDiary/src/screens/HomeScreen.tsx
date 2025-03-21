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
  // 초기 불러오기 위해서 style사용하기 위해서 얘를 안써도 등록
  const mode = useSelector((state: RootState) => state.theme.mode)
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  const fontFamily = useSelector((state: RootState) => state.font.fontFamily)
  const fontSize = useSelector((state: RootState) => state.font.fontSize)
  /////////////////
  // const index = useNavigationState((state) => state.index) // stack index임

  useFocusEffect(
    React.useCallback(() => {
      dispatch(selectTab(0))
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])  
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text
            style={[styles.fs2]}
          >
            홈스크린
          </Text>
        </View>
      </ScrollView>
      <WriteBtnComponent />      
    </SafeAreaView>
  );
}
export default HomeScreen;