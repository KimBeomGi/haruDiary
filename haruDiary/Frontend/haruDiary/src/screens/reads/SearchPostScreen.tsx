import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'
import BottomComponent from '../../components/BottomComponent';
import { selectTab } from '../../../store/bottom/bottomTabSlice';
import { getStyles } from '../../styles/styles';

type SearchPostScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SearchPost'>;


function SearchPostScreen(): React.JSX.Element {
  const navigation = useNavigation<SearchPostScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  // 초기 불러오기 위해서 style사용하기 위해서 얘를 안써도 등록
  const mode = useSelector((state: RootState) => state.theme.mode)
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  const fontFamily = useSelector((state: RootState) => state.font.fontFamily)
  const fontSizeValue = useSelector((state: RootState) => state.font.fontSizeValue)
  /////////////////

  
  useFocusEffect(
      React.useCallback(() => {
        dispatch(selectTab(1))
        return () => {
          // Do something when the screen is unfocused
          // Useful for cleanup functions
        };
      }, [])
    );
    // useEffect(() => {
    //   dispatch(selectTab(3))
    // }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text
            style={[styles.fs2]}
          >
            돌아보기
          </Text>
        </View>
      </ScrollView>
      {/* <BottomComponent/> */}
    </SafeAreaView>
  );
}

export default SearchPostScreen;