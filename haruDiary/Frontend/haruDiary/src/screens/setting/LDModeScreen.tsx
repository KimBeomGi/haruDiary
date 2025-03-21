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
import { selectTab } from '../../../store/bottom/bottomTabSlice';

type LDModeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LDMode'>;

function LDModeScreen(): React.JSX.Element {
  const navigation = useNavigation<LDModeScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  const [selectedMode, setSelectedMode] = useState('라이트 모드'); // 선택된 모드 상태 관리
  const [selected, setSelected] = useState(0)
  const [isCheck, setIsCheck] = useState(false)
  const mode = useSelector((state: RootState) => state.theme.mode)
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  const [preparedMode, setPreparedMode] = useState<[string, 'light' | 'dark' | 'system', string][]>([
    ["라이트 모드", "light", "light-mode"], ["다크 모드", "dark", "dark-mode"], ["시스템 모드", "system", "wb-twilight"],
  ])

  // 라디오 버튼에 들어갈 내용들을 만들어주는 함수
  const getRadioBtnNames = (modes: string[][]): { textName: string; textFont: null; iconName: string; selected: number }[] => {
    return modes.map((mode, index) => ({
      textName: mode[0],
      textFont: null,
      iconName: mode[2],
      selected: index,
    }));
  };

  const handleSelect = (textName: string, selectedIndex: number) => {
    setSelectedMode(textName);
    // console.log(`Selected mode: ${textName}, index: ${selectedIndex}`);
    // 선택된 모드에 따라 필요한 작업 수행
    isLightSet(textName, selectedIndex)
    // store에 작업
    let mode = preparedMode[selectedIndex][1]
    dispatch(setTheme(mode));
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(selectTab(3))// bottomtab의 표시
      // promise 때문에 async를 이용해줌
      const fetchMode = async () => {
        const value = await isLightGet();
        // console.log(value);
        if (value) {
          setSelectedMode(value.textName);
          setSelected(value.selectedIndex);
          setIsCheck(true)
          dispatch(setTheme(preparedMode[value.selectedIndex][1]))
        }
      };
      fetchMode();
  
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
          names={getRadioBtnNames(preparedMode)}
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

export default LDModeScreen;