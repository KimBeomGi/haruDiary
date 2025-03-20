import { useNavigation, useNavigationState } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'; 

import Icon from 'react-native-vector-icons/MaterialIcons';
import { selectTab } from '../../store/bottom/bottomTabSlice';
import { getStyles } from '../styles/styles';
// import Ionicons from 'react-native-vector-icons/Ionicons';


type BottomComponentNavigationProp = NativeStackNavigationProp<RootStackParamList>;


function BottomComponent(): React.JSX.Element {
  const navigation = useNavigation<BottomComponentNavigationProp>()
  // const count = useSelector((state: RootState) => state.counter.value)
  const selectTabIdx = useSelector((state: RootState) => state.bottomTab.value)
  const dispatch = useDispatch()
  const styles = getStyles()

  return (
    <SafeAreaView style={styles.btmContainer}>
      <TouchableOpacity
        style={styles.btmEachPosition}
        activeOpacity={0.8}
        onPress={() => {
          // navigation.navigate('Home')
          // navigation.popToTop()//이 안먹혀서 reset 사용
          if(selectTabIdx !== 0){
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
          }
        }} 
      >
        <Text>
          <Icon name="home" color= {selectTabIdx === 0 ? "#c041ff" : "#a0a0a0"} size={24} />
        </Text>
        <Text
          style={[styles.fs2]}
        >
          홈
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btmEachPosition}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('SearchPost')
        }}
      >
<Text>
          <Icon name="history" color= {selectTabIdx === 1 ? "#c041ff" : "#a0a0a0"} size={24} />
</Text>
        <Text
          style={[styles.fs2]}
        >
          돌아보기
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btmEachPosition}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('AiHaru')
        }}
      >
        <Text>
          <Icon name="chat" color= {selectTabIdx === 2 ? "#c041ff" : "#a0a0a0"} size={24} />
        </Text>
        <Text
          style={[styles.fs2]}
        >
          하루
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btmEachPosition}
        activeOpacity={0.8}
        onPress={() => {
          navigation.navigate('ProfileMain')
        }}
      >
        <Text>
          <Icon name="person" color= {selectTabIdx === 3 ? "#c041ff" : "#a0a0a0"} size={24} />
        </Text>
        <Text
          style={[styles.fs2]}
        >
          프로필
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default BottomComponent;