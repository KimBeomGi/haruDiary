import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View, Button } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App'; // RootStackParamList를 가져옵니다.

type TestScreen1NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Test1'>;


function TestScreen1(): React.JSX.Element {
  const navigation = useNavigation<TestScreen1NavigationProp>()
  return (
    <SafeAreaView>
      <View>
        <Text>TestScreen1</Text>
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

export default TestScreen1;