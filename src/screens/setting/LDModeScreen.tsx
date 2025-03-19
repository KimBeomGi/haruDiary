import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.


import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'

import styles from '../../styles/styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import RadioBtnItem from '../../components/RadioBtnItem';
import RadioBtnGroup from '../../components/RadioBtnGroup';
import { isLightGet, isLightSet } from '../../asyncStorage/asyncStorage';


type LDModeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LDMode'>;


function LDModeScreen(): React.JSX.Element {
  const navigation = useNavigation<LDModeScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [selectedMode, setSelectedMode] = useState('라이트 모드'); // 선택된 모드 상태 관리
  const [selected, setSelected] = useState(0)
  const [isCheck, setIsCheck] = useState(false)

  useFocusEffect(
    React.useCallback(() => {
      // promise 때문에 async를 이용해줌
      const fetchMode = async () => {
        const value = await isLightGet();
        console.log(value);
        if (value) {
          setSelectedMode(value.textName);
          setSelected(value.selectedIndex);
          setIsCheck(true)
        }
      };
      fetchMode();
  
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])  
  );

  const handleSelect = (textName: string, selectedIndex: number) => {
    setSelectedMode(textName);
    console.log(`Selected mode: ${textName}, index: ${selectedIndex}`);
    // 선택된 모드에 따라 필요한 작업 수행
    isLightSet(textName, selectedIndex)
  };

  return (
    <SafeAreaView
      style = {{paddingHorizontal: 16}}
    >
      {isCheck && (
        <RadioBtnGroup 
          names={[
            {textName :'라이트 모드', iconName : 'light-mode', selected : 0},
            {textName :'다크 모드', iconName : 'dark-mode', selected : 1},
            {textName :'시스템 모드', iconName : 'wb-twilight', selected : 2},
          ]}
          onSelect={handleSelect} // 콜백 함수 전달
          selected={selected} // 선택된 라디오 버튼 인덱스 전달
        />
      )}
      {/* <Text>Selected mode: {selectedMode}</Text> */}
    </SafeAreaView>
    
  );
}

export default LDModeScreen;