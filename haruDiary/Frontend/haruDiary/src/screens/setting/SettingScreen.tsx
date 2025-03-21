import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'

import {getStyles} from '../../styles/styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import { incrementByAmount } from '../../../store/counter/counterSlice';
import { selectTab } from '../../../store/bottom/bottomTabSlice';


type SettingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Setting'>;


function SettingScreen(): React.JSX.Element {
  const navigation = useNavigation<SettingScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const styles = getStyles()
  const dispatch = useDispatch()
  // store에 있는 mode와 isDarkMode를 여기로 가져오니 바로바로 잘 읽어서 온다. 사용하지도 않는데 왜지???
  // 초기 불러오기 위해서 style사용하기 위해서 얘를 안써도 등록
  const mode = useSelector((state: RootState) => state.theme.mode)
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  const fontFamily = useSelector((state: RootState) => state.font.fontFamily)
  const fontSizeValue = useSelector((state: RootState) => state.font.fontSizeValue)
  /////////////////

  useFocusEffect(
    React.useCallback(() => {
      dispatch(selectTab(3))// bottomtab의 표시
      
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return (
    <SafeAreaView
      style = {[styles.container, styles.pdhr2]}
    >
      <TouchableOpacity
        style = {[styles.pdvr1, styles.pdhr1, styles.dRow]}
        onPress={() => {
          
        }}
      >
        <Text
          style={[]}
        >
          <MaterialIcons name = "lock-outline" color={styles.fs3.color} size={styles.fs3.fontSize} />
        </Text>
        <Text
          style = {[styles.fs3, styles.pdhr1]}
        >
          잠금 설정
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {[styles.pdvr1, styles.pdhr1, styles.dRow]}
        onPress={() => {
          navigation.navigate("LDMode")
        }}
      >
        <Text
          style={[]}
        >
          <Ionicons name = "moon-outline" color={styles.fs3.color} size={styles.fs3.fontSize} />
        </Text>
        <Text
          style = {[styles.fs3, styles.pdhr1]}
        >
          화면 모드
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {[styles.pdvr1, styles.pdhr1, styles.dRow]}
        onPress={() => {
          navigation.navigate("FontMode")
        }}
      >
        <Text
          style={[]}
        >
          <MaterialIcons name = "font-download" color={styles.fs3.color} size={styles.fs3.fontSize} />
        </Text>
        <Text
          style = {[styles.fs3, styles.pdhr1]}
        >
          폰트
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style = {[styles.pdvr1, styles.pdhr1, styles.dRow]}
        onPress={() => {
          
        }}
      >
        <Text
          style={[]}
        >
          <Octicons name = "bell" color={styles.fs3.color} size={styles.fs3.fontSize} />
        </Text>
        <Text
          style = {[styles.fs3, styles.pdhr1]}
        >
          알림
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   content: {
//     flex: 1,
//   },
// });

export default SettingScreen;