import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'
import BottomComponent from '../../components/BottomComponent';

type SearchPostScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SearchPost'>;


function SearchPostScreen(): React.JSX.Element {
  const navigation = useNavigation<SearchPostScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
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
        <Text>현재 갯수는 : {count}개</Text>
      </ScrollView>
      {/* <BottomComponent/> */}
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


export default SearchPostScreen;