import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'

type TestScreen3NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Test2'>;

function TestScreen3(): React.JSX.Element {
  const navigation = useNavigation<TestScreen3NavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
    
  return (
    <SafeAreaView>
      <View>
        <Text>TestScreen3</Text>
        <Text>잘되나</Text>
      </View>
      <Button
        title='홈스크린'
        onPress={() => {
          // navigation.navigate('Home')
          navigation.popToTop()
        }}
      />
      <Button
        title='테스트스크린1'
        onPress={() => {
          navigation.navigate('Test1')
        }}
      />
      <Button
        title='테스트스크린2'
        onPress={() => {
          navigation.navigate('Test1')
        }}
      />
      <Text>현재 갯수는 : {count}개</Text>
    </SafeAreaView>
    
  );
}

export default TestScreen3;