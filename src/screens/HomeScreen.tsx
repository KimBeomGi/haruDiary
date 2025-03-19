import React, { useEffect } from 'react';
import { Button, SafeAreaView, Text, View, BackHandler, Alert, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


import type { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../store/counter/counterSlice';
import BottomComponent from '../components/BottomComponent';

import styles from '../styles/styles';

// NavigationProp 타입을 설정합니다.
// type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;
type HomeScreenNavigationProp = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'Home'>;
};

function HomeScreen({ route, navigation}:HomeScreenNavigationProp): React.JSX.Element {
  // const navigation = useNavigation<HomeScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  
  // useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("잠깐만요!", "정말 끝낼거에요?", [
  //       {
  //         text: 'Cancel',
  //         onPress: () => null,
  //         style: 'cancel',
  //       },
  //       {text: 'YES', onPress: () => BackHandler.exitApp()},
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     'hardwareBackPress',
  //     backAction,
  //   );

  //   return () => backHandler.remove();
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text>홈스크린</Text>
          <Text>잘되나</Text>
        </View>
      </ScrollView>
      {/* <BottomComponent/> */}
    </SafeAreaView>
    
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   content: {
//     flex: 1,
//     marginHorizontal : 16,
//   },
// });

export default HomeScreen;