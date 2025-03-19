import { useNavigation } from '@react-navigation/native';
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
    iconName: string;
  }[]
}


function RadioBtnGroup(param : RadioBtnGroupParam): React.JSX.Element {
  const navigation = useNavigation<RadioBtnGroupNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const [selected, setSelected] = useState(-1);



  return (
    <SafeAreaView>
      <TouchableOpacity
        activeOpacity={0.8}
      >

      {param.names.map((item, index) => (
        <RadioBtnItem 
          key={index} 
          textName={item.textName} 
          iconName={item.iconName}
          selected={selected === index}
          onPress={() => setSelected(index)}

        />
      ))}
      
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  
});

export default RadioBtnGroup;