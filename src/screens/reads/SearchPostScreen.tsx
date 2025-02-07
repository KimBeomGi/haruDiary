import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'

type SearchPostScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Test1'>;


function SearchPostScreen(): React.JSX.Element {
  const navigation = useNavigation<SearchPostScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <SafeAreaView>
      <View>
        <Text>SearchPostScreen</Text>
        <Text>잘되나</Text>
      </View>
      <Button
        title='프로필'
        onPress={() => {
          // navigation.navigate('Home')
          navigation.navigate('ProfileMain')
        }}
      />
      <Button
        title='포스트 자세히 보기'
        onPress={() => {
          navigation.navigate('DetailPost')
        }}
      />
      <Button
        title='글쓰기'
        onPress={() => {
          navigation.navigate('WritePost')
        }}
      />
      <Button
        title='테스트2'
        onPress={() => {
          navigation.navigate('Test2')
        }}
      />
      <Text>현재 갯수는 : {count}개</Text>
    </SafeAreaView>
  );
}

export default SearchPostScreen;