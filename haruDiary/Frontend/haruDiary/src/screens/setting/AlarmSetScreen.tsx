import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'
import BottomComponent from '../../components/BottomComponent';
import { getStyles } from '../../styles/styles';
import AlarmSetModal from '../../modals/AlarmSetModal';
import { selectTab } from '../../../store/bottom/bottomTabSlice';

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
  const [isAlarmSetOpen, setIsAlarmSetOpen] = useState(false)

  const handleModalClose = () => {
    setIsAlarmSetOpen(!isAlarmSetOpen);
  };
  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      dispatch(selectTab(3))// bottomtab의 표시
      return () => {
        setIsAlarmSetOpen(false)
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );

  return (
    <SafeAreaView style={[styles.container, styles.pdvr2, styles.pdhr2]}>
      <TouchableOpacity 
        style={[styles.content]}
        activeOpacity={1}
        onPress={() => {
          if(isAlarmSetOpen) setIsAlarmSetOpen(!isAlarmSetOpen)
        }}
      >
        <View
          style={[styles.mgvr2, styles.dRowSB]}
        >
          <Text
            style={[styles.fs3, styles.fw2]}
          >
            알림
          </Text>
          {/* 토글 버튼 */}
          <View>

          </View>
        </View>
        <TouchableOpacity
          style={[styles.mgvr2, styles.dRowSB,]}
          onPress={() => {
            setIsAlarmSetOpen(!isAlarmSetOpen)
          }}
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
      </TouchableOpacity>
      {isAlarmSetOpen && (
        // <AlarmSetModal isAlarmSetOpen={isAlarmSetOpen} handleModalClose={handleModalClose}/>
        <AlarmSetModal handleModalClose={handleModalClose}/>
      )}
    </SafeAreaView>
  );
}

export default AlarmSetScreen;