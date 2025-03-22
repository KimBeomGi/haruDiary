import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'; 

import Icon from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { getStyles } from '../styles/styles';

//
import { Button } from 'react-native-paper';
import { TimePickerModal } from 'react-native-paper-dates';
import { SafeAreaProvider } from "react-native-safe-area-context";
//

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
  //
  const [visible, setVisible] = React.useState(false)
  const onDismiss = React.useCallback(() => {
    setVisible(false)
  }, [setVisible])

  const onConfirm = React.useCallback(
    ({ hours, minutes } : any) => {
      setVisible(false);
      console.log({ hours, minutes });
    },
    [setVisible]
  );
  ////

  return (
    <SafeAreaView
      style={[styles.alarmSmContainer]}
    >
      <View>
        {/* <Text
          style={[styles.fs4]}
        >
          알람 모달
        </Text> */}
        <View 
        // style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}
        >
          <Button onPress={() => setVisible(true)} uppercase={false} mode="outlined">
            Pick time
          </Button>
          <TimePickerModal
            visible={visible}
            onDismiss={onDismiss}
            onConfirm={onConfirm}
            hours={12}
            minutes={14}
          />
        </View>
        
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