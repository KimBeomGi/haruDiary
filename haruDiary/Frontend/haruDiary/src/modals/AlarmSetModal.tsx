import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Animated, Button, Platform, TextInput } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'; 

import Icon from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { getStyles } from '../styles/styles';

// import DatePicker from 'react-native-date-picker'
import DateTimePicker from '@react-native-community/datetimepicker';



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
  // const [isAlarmSetOpen, setIsAlarmSetOpen] = useState(param.isAlarmSetOpen)

  // const [date, setDate] = useState(new Date())
  const [time, setTime] = useState({
    hours : '21',
    minutes : '00',
  })

  const handleHoursChange = (value: string) => {
    const hours = parseInt(value, 10);
    if (isNaN(hours) || hours < 0 || hours > 23) {
      return ; // 유효하지 않은 입력 무시
    }
    setTime({ ...time, hours: value }); // 2자리 형식으로 자동 완성
  };

  const handleMinutesChange = (value: string) => {
    const minutes = parseInt(value, 10);
    if (isNaN(minutes) || minutes < 0 || minutes > 59) {
      return ; // 유효하지 않은 입력 무시
    }
    setTime({ ...time, minutes: value }); // 2자리 형식으로 자동 완성
  };
  
  return (
    <SafeAreaView
    style={[styles.alarmSMContainer]}
    >
      <View
        style={[styles.alarmSMContent]}
      >
        <View
          style={[styles.dRowJC]}
        >
          <Text
            style={[styles.fs3]}
          >
            알림 시간
          </Text>
        </View>
        <View
          style={[styles.dRowJC]}
        >
          <TextInput
            style={[]}
            value={time.hours}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={handleHoursChange}
          />
          <Text
            style={[]}
          >
            :
          </Text>
          <TextInput
            style={[]}
            value={time.minutes}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={handleMinutesChange}
          />
        </View>
        <View
          style={[styles.dRowSB]}
        >
          <TouchableOpacity
            onPress={() => {
              // param.handleModalClose()
            }}
          >
            <Text
              style={[styles.fs4]}
              >
              취소
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // param.handleModalClose()
            }}
          >
            <Text
              style={[styles.fs4]}
              >
              확인
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default AlarmSetModal;