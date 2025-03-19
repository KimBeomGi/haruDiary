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
        style={styles.eachposition}
        onPress={() => {
          // navigation.navigate('Home')
          // navigation.popToTop()이 안먹혀서 reset 사용
          navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }], // 첫 번째 화면 이름
          });
        }}
      >
        <Icon name="home" color="#a0a0a0" size={24} />
        <Text>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.eachposition}
        onPress={() => {navigation.navigate('ChartPost')}}
      >
        <Icon name="show-chart" color="#a0a0a0" size={24} />
        <Text>차트</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.eachposition}
        onPress={() => {navigation.navigate('SearchPost')}}
      >
        <Icon name="search" color="#a0a0a0" size={24} />
        <Text>검색</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.eachposition}
        onPress={() => {navigation.navigate('ProfileMain')}}
      >
        <Icon name="person" color="#a0a0a0" size={24} />
        <Text>프로필</Text>
      </TouchableOpacity>
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
  eachposition: {
    alignItems: 'center',
  }
});

export default BottomComponent;