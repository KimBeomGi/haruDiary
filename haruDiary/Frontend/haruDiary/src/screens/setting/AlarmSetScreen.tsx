import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
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
import notifee, { AndroidColor, AndroidImportance, RepeatFrequency, TimestampTrigger, TriggerType } from '@notifee/react-native';


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
  // 알림 토글
  const [isAlarmEnabled, setIsAlarmEnabled] = useState(true); // 토글 상태
  const [triggerId, setTriggerId] = useState<string | null>(null); // 예약된 알림의 triggerId

  const handleAlarmTime = (event:DateTimePickerEvent, selectedDate: Date|undefined) => {
    const currentDate = selectedDate;
    setIsAlarmSetOpen(false)
    if(currentDate){
      setDate(currentDate);
      setTime(currentDate.toTimeString().slice(0,5))
      whenAlarmTimeSet(selectedDate.getTime(), isAlarmEnabled)// 선택한 Date getTime으로 unix 타임스탬프로 변환후 저장하기
    }
    if(isAlarmEnabled){
      scheduleAlarm()
    }
  };
  
  const handleIsAlarmEnabled = () => {
    const tmp = !isAlarmEnabled
    // if(!tmp){
    //   cancelAlarm()
    // }else{
    //   scheduleAlarm()
    // }
    cancelAlarm() // 푸시알림을 다룰때 기존의 알람을 제거해주고 조정
    if(tmp){
      scheduleAlarm()
    }
    setIsAlarmEnabled(tmp)
    whenAlarmTimeSet(date.getTime(), tmp)
  }

  useEffect(() => {
    async function createChannel() {
      await notifee.createChannel({
        id: 'alarm_channel',
        name: 'Alarm Channel',
        importance: AndroidImportance.HIGH,
        vibration: true,
      });
    }
    createChannel();
  }, []);

  useEffect(() => {
    if (isAlarmEnabled) {
      scheduleAlarm();
    } else {
      cancelAlarm();
    }
  }, [isAlarmEnabled, date]);
  
  // async function onDisplayNotification() {
  //   // Request permissions (required for iOS)
  //   await notifee.requestPermission()

  //   // Create a channel (required for Android)
  //   const channelId = await notifee.createChannel({
  //     id: 'alarm_Channel',
  //     name: 'Alarm Channel',
  //   });

  //   // Display a notification
  //   await notifee.displayNotification({
  //     title: '일기 작성 시간!',
  //     body: '하루일기에서 오늘의 이야기를 작성해보세요.',
  //     android: {
  //       channelId : 'alarm_Channel',
  //       // smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
  //       // pressAction is needed if you want the notification to open the app when pressed
  //       pressAction: {
  //         id: 'default',
  //       },
  //     },
  //   });
  // }

  async function scheduleAlarm() {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const now = new Date();
    const alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);

    if (alarmTime <= now) {
      alarmTime.setDate(alarmTime.getDate() + 1);
    }

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: alarmTime.getTime(),
    };

    const notification = {
      title: '일기 작성 시간!',
      body: `설정하신 ${hours}:${minutes}에 알람이 울립니다. \n 하루일기에서 오늘의 이야기를 작성해보세요.`,
      android: {
        channelId: 'alarm_channel',
        pressAction: {
          id: 'default',
        },
      },
    };

    const triggerId = await notifee.createTriggerNotification(notification, trigger);
    setTriggerId(triggerId);
  }

  async function cancelAlarm() {
    if (triggerId) {
      await notifee.cancelTriggerNotification(triggerId);
      setTriggerId(null);
    }
  }


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
          setIsAlarmEnabled(value.isAlaramEnabled)
          // setIsCheck(true)  // value가 들어온 후에 렌더링하기 위함.
        }
      };
      fetchMode();
      if(isAlarmEnabled){
        scheduleAlarm()
      }

      return () => {
        setIsAlarmSetOpen(false)
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [dispatch])
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
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isAlarmEnabled ? '#b485ff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              // onValueChange={() => setIsAlarmEnabled(previousState => !previousState)}
              onValueChange={() => handleIsAlarmEnabled()}
              value={isAlarmEnabled}
            />
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
        {/* <View>
          <Button title="Display Notification" onPress={() => onDisplayNotification()} />
        </View> */}
      </TouchableOpacity>

      {isAlarmSetOpen && (
        <DateTimePicker
          // testID="dateTimePicker"
          value={date}
          mode={dateTimeMode}
          is24Hour={true}
          onChange={(event, date) => {handleAlarmTime(event, date)}}
          display="default"
        />
      )}
    </SafeAreaView>
  );
}

export default AlarmSetScreen;