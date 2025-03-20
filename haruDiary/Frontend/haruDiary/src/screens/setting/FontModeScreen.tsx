import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.


import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'

import {getStyles} from '../../styles/styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import RadioBtnItem from '../../components/RadioBtnItem';
import RadioBtnGroup from '../../components/RadioBtnGroup';
import { isLightGet, isLightSet } from '../../asyncStorage/asyncStorage';
import { setTheme } from '../../../store/theme/themeSlice';


type FontModeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'FontMode'>;


function FontModeScreen(): React.JSX.Element {
  const navigation = useNavigation<FontModeScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  const [selectedMode, setSelectedMode] = useState('라이트 모드'); // 선택된 모드 상태 관리
  const [selected, setSelected] = useState(0)
  const [isCheck, setIsCheck] = useState(false)
  const mode = useSelector((state: RootState) => state.theme.mode)
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)


  const handleSelect = (textName: string, selectedIndex: number) => {
    // setSelectedMode(textName);
    // // console.log(`Selected mode: ${textName}, index: ${selectedIndex}`);
    // // 선택된 모드에 따라 필요한 작업 수행
    // isLightSet(textName, selectedIndex)
    // // store에 작업
    // let mode: 'light' | 'dark' | 'system' = 'light';
    // if (selectedIndex === 0) mode = 'light';
    // if (selectedIndex === 1) mode = 'dark';
    // if (selectedIndex === 2) mode = 'system';
    // dispatch(setTheme(mode));
  };

  useFocusEffect(
    React.useCallback(() => {
      // promise 때문에 async를 이용해줌
      // const fetchMode = async () => {
      //   const value = await isLightGet();
      //   // console.log(value);
      //   if (value) {
      //     setSelectedMode(value.textName);
      //     setSelected(value.selectedIndex);
      //     setIsCheck(true)
      //     if(value.textName === '라이트 모드'){
      //       dispatch(setTheme('light'))
      //     }else if(value.textName === '다크 모드'){
      //       dispatch(setTheme('dark'))
      //     }else{
      //       dispatch(setTheme('system'))
      //     }
      //   }
      // };
      // fetchMode();
  
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [dispatch])
  );

  return (
    <SafeAreaView
      style = {[styles.container, styles.pdhr2]}
    >
      {isCheck && (
        <RadioBtnGroup
          names={[
            {textName :'기본', iconName : null, selected : 0},
            {textName :'1번 글자', iconName : null, selected : 1},
            {textName :'2번 글자', iconName : null, selected : 2},
            {textName :'3번 글자', iconName : null, selected : 3},
            {textName :'4번 글자', iconName : null, selected : 3},
          ]}
          onSelect={handleSelect} // 콜백 함수 전달
          selected={selected} // 선택된 라디오 버튼 인덱스 전달
        />
      )}
      {/* <Text>Selected mode: {selectedMode}</Text> */}
      {/* <Text>{mode}</Text>
      <Text>{isDarkMode ? 'true': 'false'}</Text> */}
    </SafeAreaView>
    
  );
}

export default FontModeScreen;