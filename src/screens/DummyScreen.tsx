import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../store/counter/counterSlice';

import BottomComponent from '../components/BottomComponent';

// type DummyScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Test1'>;
type DummyScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;


function DummyScreen(): React.JSX.Element {
  const navigation = useNavigation<DummyScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text>DummyScreen</Text>
          <Text>잘되나</Text>
        </View>
        <Button
          title='프로필'
          onPress={() => {
            // navigation.navigate('Home')
            navigation.navigate('ProfileMain')
          }}
        />
        <Text>현재 갯수는 : {count}개</Text>
        <Button
          title='1씩 증가'
          onPress={() => {return(dispatch(increment()))}}
        />
        <Button
          title='1씩 감소'
          onPress={() => {return(dispatch(decrement()))}}
        />
        <Button
          title='5씩 증가'
          onPress={() => {return(dispatch(incrementByAmount(5)))}}
        />
        <Button
          title='3씩 감소'
          onPress={() => {return(dispatch(incrementByAmount(-3)))}}
        />
      </ScrollView>
      <BottomComponent/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
  },
});


export default DummyScreen;