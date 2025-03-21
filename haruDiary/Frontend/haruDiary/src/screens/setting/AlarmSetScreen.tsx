import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'
import BottomComponent from '../../components/BottomComponent';
import { getStyles } from '../../styles/styles';

type AlarmSetScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AlarmSet'>;


function AlarmSetScreen(): React.JSX.Element {
  const navigation = useNavigation<AlarmSetScreenNavigationProp>()
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
    <SafeAreaView style={[styles.container, styles.pdvr2, styles.pdhr2]}>
      <ScrollView style={[styles.content]}>
        <View
          style={[styles.mgvr2, styles.dRowSB]}
        >
          <Text
            style={[styles.fs3]}
          >
            알림
          </Text>
          {/* 토글 버튼 */}
          <View>

          </View>
        </View>
        <TouchableOpacity
          style={[styles.mgvr2, styles.dRowSB,]}
        >
          <Text
            style={[styles.fs3]}
          >
            알림 시간
          </Text>
          <Text
            style={[styles.fs3]}
          >
            21:00
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AlarmSetScreen;