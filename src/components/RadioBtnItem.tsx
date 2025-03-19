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

type RadioBtnItemNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RadioBtnItemParam = {
  textName : string;
  iconName : string;
  selected : boolean;
  onPress : () => void;
}


function RadioBtnItem(param:RadioBtnItemParam): React.JSX.Element {
  const navigation = useNavigation<RadioBtnItemNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <SafeAreaView>
      <TouchableOpacity
        style={styles.modeBtn}
        activeOpacity={0.8}
        onPress={param.onPress}
      >
        <View style={{flexDirection : "row", alignItems : "center"}}>
          <View style={[styles.modeSelectBtn1, param.selected && styles.selectedCircle]}></View>
          <Text style={styles.modeSelectBtn2}>{param.textName}</Text>
        </View>
        <Text style={styles.modeSelectBtn3}>
          <MaterialIcons name={param.iconName} size={16} />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  modeBtn: {
    flexDirection : "row",
    // justifyContent : 'center',
    justifyContent: "space-between",
    alignItems : 'center',
    padding : 8,
  },
  modeSelectBtn1 : {
    height: 16,
    width: 16,
    borderRadius : 8,
    borderColor : "#000000",
    borderStyle : "solid",
    borderWidth : 1,
    marginHorizontal : 8,
  },
  selectedCircle: {
    backgroundColor: '#c041ff', // 선택된 원의 배경색
    borderColor: '#c041ff',
  },

  modeSelectBtn2 : {
    fontSize : 16,
    paddingHorizontal : 8
  },
  modeSelectBtn3 : {
    paddingHorizontal : 8
  }
});

export default RadioBtnItem;