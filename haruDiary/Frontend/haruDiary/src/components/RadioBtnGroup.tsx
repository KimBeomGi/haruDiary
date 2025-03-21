import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity, Animated, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'; 

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import RadioBtnItem from './RadioBtnItem';

type RadioBtnGroupNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RadioBtnGroupParam = {
  names : {
    textName: string;
    textFont: string | null;
    iconName: string | null;
    selected: number;
  }[];
  onSelect: (textName: string, selectedIndex: number) => void; // 콜백 함수 prop 추가
  selected: number;
}

function RadioBtnGroup(param : RadioBtnGroupParam): React.JSX.Element {
  const navigation = useNavigation<RadioBtnGroupNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(param.selected);

  return (
    <SafeAreaView>
      <TouchableOpacity
        activeOpacity={0.8}
      >
      {param.names.map((item, index) => (
        <RadioBtnItem 
          key={index} 
          textName={item.textName} 
          textFont={item.textFont}
          iconName={item.iconName}
          selected={selected === index}
          onPress={() => {
            setSelected(index);
            param.onSelect(item.textName, index); // 콜백 함수 호출
          }}
        />
      ))}
      
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  
});

export default RadioBtnGroup;