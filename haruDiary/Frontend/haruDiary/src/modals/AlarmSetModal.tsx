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
            onChangeText={(value) => {
              const tmp = {
                hours : value,
                minutes : time.minutes
              }
              setTime(tmp)
            }}
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
            onChangeText={(value) => {
              const tmp = {
                hours : time.hours,
                minutes : value
              }
              setTime(tmp)
            }}
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