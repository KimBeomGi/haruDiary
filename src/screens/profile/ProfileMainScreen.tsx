import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.

import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'
import BottomComponent from '../../components/BottomComponent';
import { selectTab } from '../../../store/bottom/bottomTabSlice';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

type ProfileMainScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ProfileMain'>;


function ProfileMainScreen(): React.JSX.Element {
  const navigation = useNavigation<ProfileMainScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  useFocusEffect(
    React.useCallback(() => {
      dispatch(selectTab(3))
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [])
  );
  // useEffect(() => {
  //   dispatch(selectTab(3))
  // }, [])

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <View>
          <Text>ProfileMainScreen</Text>
        </View>
        <Button
          title='프로필'
          onPress={() => {
            // navigation.navigate('Home')
            navigation.navigate('ProfileMain')
          }}
        />
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            navigation.navigate('Setting')
          }}
        >
          <Text>
            <MaterialIcons name="settings" color="#a0a0a0" size={16}/>
            설정하기
          </Text>
        </TouchableOpacity>
        
      </ScrollView>
      {/* <BottomComponent/> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
  },
});

export default ProfileMainScreen;