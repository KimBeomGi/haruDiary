import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'; 

import Icon from 'react-native-vector-icons/MaterialIcons';

type HeaderComponentNavigationProp = NativeStackNavigationProp<RootStackParamList>;


function HeaderComponent(): React.JSX.Element {
  const navigation = useNavigation<HeaderComponentNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => {navigation.navigate('Home')}}
      >
        <Text>
          <Icon name="laptop-chromebook" color="#5d00fd55" size={24} />
        </Text>
      </TouchableOpacity>
      {/* <Button
        title='홈'
        onPress={() => {navigation.navigate('Home')}}
      /> */}
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#eee',
    borderTopWidth: 1,
    // borderTopColor: '#eee',
  },
});

export default HeaderComponent;