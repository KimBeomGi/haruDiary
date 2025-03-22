import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'; 

import Icon from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { getStyles } from '../styles/styles';

type AlarmSetModalNavigationProp = NativeStackNavigationProp<RootStackParamList>;

type AlarmSetModalParam = {
  // isAlarmSetOpen : boolean;
  handleModalClose : () => void;
}


function AlarmSetModal(param: AlarmSetModalParam): React.JSX.Element {
  const navigation = useNavigation<AlarmSetModalNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  const [rotation, setRotation] = useState(0)
  const rotationValue = useState(new Animated.Value(0))[0];
  // const [isAlarmSetOpen, setIsAlarmSetOpen] = useState(param.isAlarmSetOpen)


  return (
    <SafeAreaView
      style={[styles.alarmSmContainer]}
    >
      <View>
        <Text
          style={[styles.fs4]}
        >
          알람 모달
        </Text>
        <TouchableOpacity
          onPress={() => {
            // setIsAlarmSetOpen(!isAlarmSetOpen)
            param.handleModalClose()
          }}
        >
          <Text
            style={[styles.fs4]}
          >
            취소
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default AlarmSetModal;