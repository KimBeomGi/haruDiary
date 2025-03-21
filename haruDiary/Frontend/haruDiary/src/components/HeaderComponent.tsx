import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'; 

import Icon from 'react-native-vector-icons/MaterialIcons';
import { getStyles } from '../styles/styles';

type HeaderComponentNavigationProp = NativeStackNavigationProp<RootStackParamList>;


function HeaderComponent(): React.JSX.Element {
  const navigation = useNavigation<HeaderComponentNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()

  return (
    <SafeAreaView style={[styles.headerContainer]}>
      <TouchableOpacity
        onPress={() => {
          // navigation.navigate('Home')
          navigation.popToTop()
        }}
      >
        <Text>
          <Icon name="laptop-chromebook" color={styles.headerIcon.color} size={24} />
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
  
});

export default HeaderComponent;