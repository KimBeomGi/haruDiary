import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity, Animated, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'; 

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { getStyles } from '../styles/styles';

type RadioBtnItemNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type RadioBtnItemParam = {
  textName : string;
  textFont: string | null;
  iconName : string | null;
  selected : boolean;
  onPress : () => void;
}


function RadioBtnItem(param:RadioBtnItemParam): React.JSX.Element {
  const navigation = useNavigation<RadioBtnItemNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={[styles.radioBtnItem, styles.pdvr2, styles.pdhr1]}
        activeOpacity={0.8}
        onPress={param.onPress}
      >
        <View style={{flexDirection : "row", alignItems : "center"}}>
          <View style={[styles.radioSelectBtn, styles.pdhr1, param.selected && styles.selectedCircle]}></View>
          <Text style={[styles.fs3, styles.pdhr1, param.textFont ? { fontFamily:`${param.textFont}`} : null,]}>{param.textName}</Text>
        </View>
        {param.iconName && (
          <Text style={styles.pdhr1}>
            <MaterialIcons name={param.iconName} size={styles.fs3.fontSize} color={styles.fs3.color}/>
          </Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default RadioBtnItem;