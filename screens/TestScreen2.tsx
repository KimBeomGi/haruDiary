import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // RootStackParamList를 가져옵니다.

type TestScreen2NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Test2'>;

function TestScreen2(): React.JSX.Element {
  const navigation = useNavigation<TestScreen2NavigationProp>()
  return (
    <SafeAreaView>
      <View>
        <Text>TestScreen2</Text>
        <Text>잘되나</Text>
      </View>
      <Button
        title='홈스크린'
        onPress={() => {
          // navigation.navigate('Home')
          navigation.popToTop()
        }}
      />
      <Button
        title='테스트스크린1'
        onPress={() => {
          navigation.navigate('Test1')
        }}
      />
      <Button
        title='테스트스크린3'
        onPress={() => {
          navigation.navigate('Test1')
        }}
      />
    </SafeAreaView>
    
  );
}

export default TestScreen2;