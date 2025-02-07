import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'; 

import Icon from 'react-native-vector-icons/MaterialIcons';


type BottomComponentNavigationProp = NativeStackNavigationProp<RootStackParamList>;


function BottomComponent(): React.JSX.Element {
  const navigation = useNavigation<BottomComponentNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {navigation.navigate('Home')}}
      >
        <Icon name="home" color="#a0a0a0" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {navigation.navigate('ChartPost')}}
      >
        <Icon name="show-chart" color="#a0a0a0" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {navigation.navigate('SearchPost')}}
      >
        <Icon name="search" color="#a0a0a0" size={24} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {navigation.navigate('ProfileMain')}}
      >
        <Icon name="person" color="#a0a0a0" size={24} />
      </TouchableOpacity>
      {/* <Button
        title='홈'
        onPress={() => {navigation.navigate('Home')}}
      />
      <Button
        title='차트'
        onPress={() => {navigation.navigate('ChartPost')}}
      />
      <Button
        title='검색'
        onPress={() => {navigation.navigate('SearchPost')}}
      />
      <Button
        title='프로필'
        onPress={() => {navigation.navigate('ProfileMain')}}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: '#eeeeee',
    borderTopWidth: 1,
    borderTopColor: '#000000',
  },
});

export default BottomComponent;