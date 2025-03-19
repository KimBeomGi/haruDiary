import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
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


type LDModeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'LDMode'>;


function LDModeScreen(): React.JSX.Element {
  const navigation = useNavigation<LDModeScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <SafeAreaView
      style = {{paddingHorizontal: 16}}
    >
      <TouchableOpacity
        style = {styles.button1}
        onPress={() => {
          
        }}
      >
        
      </TouchableOpacity>

      <RadioBtnGroup 
        names={[
          {textName :'시스템 모드', iconName : 'wb-twilight'},
          {textName :'라이트 모드', iconName : 'light-mode'},
          {textName :'다크 모드', iconName : 'dark-mode'},
        ]}/>
      {/* <RadioBtnItem textName={'시스템 모드'} iconName={'wb-twilight'}/>
      <RadioBtnItem textName={'라이트 모드'} iconName={'light-mode'}/>
      <RadioBtnItem textName={'다크 모드'} iconName={'dark-mode'}/> */}
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

export default LDModeScreen;