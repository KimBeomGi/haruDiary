import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'
import BottomComponent from '../../components/BottomComponent';
import { getStyles } from '../../styles/styles';

type DetailPostScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'DetailPost'>;


function DetailPostScreen(): React.JSX.Element {
  const navigation = useNavigation<DetailPostScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  // 초기 불러오기 위해서 style사용하기 위해서 얘를 안써도 등록
  const mode = useSelector((state: RootState) => state.theme.mode)
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  const fontFamily = useSelector((state: RootState) => state.font.fontFamily)
  const fontSizeValue = useSelector((state: RootState) => state.font.fontSizeValue)
  /////////////////

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text>DetailPostScreen</Text>
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

export default DetailPostScreen;