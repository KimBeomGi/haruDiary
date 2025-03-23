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
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker'; // 알림 시간 조정에 쓰임임
import { whenAlarmTimeGet, whenAlarmTimeSet } from '../../asyncStorage/asyncStorage';
import notifee, { AndroidColor } from '@notifee/react-native';


type AlarmSetScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'AlarmSet'>;


function AlarmSetScreen(): React.JSX.Element {
  const navigation = useNavigation<AlarmSetScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  // 초기 불러오기 위해서 style사용하기 위해서 얘를 안써도 등록
  const themeMode = useSelector((state: RootState) => state.theme.mode)
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode)
  const fontFamily = useSelector((state: RootState) => state.font.fontFamily)
  const fontSizeValue = useSelector((state: RootState) => state.font.fontSizeValue)
  /////////////////
  const [isAlarmSetOpen, setIsAlarmSetOpen] = useState(false)

  ///알림 시간 조정
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("21:00")
  const [dateTimeMode, setDateTimeMode] = useState<'time'|'date'>('time');
  // const [show, setShow] = useState(false);

  const onChange = (event:DateTimePickerEvent, selectedDate: Date|undefined) => {
    const currentDate = selectedDate;
    setIsAlarmSetOpen(false)
    if(currentDate){
      setDate(currentDate);
      setTime(currentDate.toTimeString().slice(0,5))
      whenAlarmTimeSet(selectedDate.getTime())// 선택한 Date getTime으로 unix 타임스탬프로 변환후 저장하기
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      dispatch(selectTab(3))// bottomtab의 표시

      const fetchMode = async () => {
        const value = await whenAlarmTimeGet();
        // console.log(value);
        if (value) {
          setDate(new Date(value.theDate))  // unix 타임스탬프로 변환해서 저장한 것을 다시 Date형식으로 변환
          setTime(new Date(value.theDate).toTimeString().slice(0,5))
          // setIsCheck(true)  // value가 들어온 후에 렌더링하기 위함.
        }
      };
      fetchMode();

      return () => {
        setIsAlarmSetOpen(false)
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [dispatch])
  );

  /////////////////////////////////

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

  ///// push 알람을 위한 notifee코드
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission()

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: '일기 작성 시간!',  //Notification Title
      body: '하루일기에서 오늘의 이야기를 작성해보세요.', //Main body content of the notification
      android: {
        channelId,
        // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }
  ////

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
            {time}
          </Text>
        </TouchableOpacity>
        {/* <Text>selected: {date.getTime()}</Text> */}
        <View>
          <Button title="Display Notification" onPress={() => onDisplayNotification()} />
        </View>
      </TouchableOpacity>

      {isAlarmSetOpen && (
        // <AlarmSetModal isAlarmSetOpen={isAlarmSetOpen} handleModalClose={handleModalClose}/>
        // <AlarmSetModal handleModalClose={handleModalClose}/>
        <DateTimePicker
          // testID="dateTimePicker"
          value={date}
          mode={dateTimeMode}
          is24Hour={true}
          onChange={(event, date) => {onChange(event, date)}}
          display="default"
        />
      )}
    </SafeAreaView>
  );
}

export default AlarmSetScreen;