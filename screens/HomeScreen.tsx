import React, { useEffect } from 'react';
import { Button, SafeAreaView, Text, View, BackHandler, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../store/counter/counterSlice';

// NavigationProp 타입을 설정합니다.
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  
  useEffect(() => {
    const backAction = () => {
      Alert.alert("잠깐만요!", "정말 끝낼거에요?", [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  return (
    <SafeAreaView>
      <View>
        <Text>홈스크린</Text>
        <Text>잘되나</Text>
      </View>
      <Button
        title='테스트스크린1'
        onPress={() => {
          navigation.navigate('Test1')
        }}
      />
      <Button
        title='테스트스크린2'
        onPress={() => {
          navigation.navigate('Test2')
        }}
      />
      <Button
        title='테스트스크린3'
        onPress={() => {
          navigation.navigate('Test2')
        }}
      />
      <Text>현재 갯수는 : {count}개</Text>
      <Button
        title='1씩 증가'
        onPress={() => {return(dispatch(increment()))}}
      />
      <Button
        title='1씩 감소'
        onPress={() => {return(dispatch(decrement()))}}
      />
      <Button
        title='5씩 증가'
        onPress={() => {return(dispatch(incrementByAmount(5)))}}
      />
      <Button
        title='3씩 감소'
        onPress={() => {return(dispatch(incrementByAmount(-3)))}}
      />
    </SafeAreaView>
    
  );
}

export default HomeScreen;