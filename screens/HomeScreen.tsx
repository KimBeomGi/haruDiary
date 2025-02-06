import React, { useEffect } from 'react';
import { Button, SafeAreaView, Text, View, BackHandler, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // RootStackParamList를 가져옵니다.

// NavigationProp 타입을 설정합니다.
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;


function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation<HomeScreenNavigationProp>()
  
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
    </SafeAreaView>
    
  );
}

export default HomeScreen;