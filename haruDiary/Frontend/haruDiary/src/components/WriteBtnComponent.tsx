import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.
import { RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'; 

import Icon from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import { getStyles } from '../styles/styles';

type WriteBtnComponentNavigationProp = NativeStackNavigationProp<RootStackParamList>;


function WriteBtnComponent(): React.JSX.Element {
  const navigation = useNavigation<WriteBtnComponentNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  const [rotation, setRotation] = useState(0)
  const rotationValue = useState(new Animated.Value(0))[0];


  return (
    <SafeAreaView
      // style={{...styles.writebBtn, transform: [{rotate: `${rotation}deg`}]}}
    >
      <TouchableOpacity
        style={{
          ...styles.writebBtn,
          transform: [{ rotate: rotationValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '180deg']
          }) }]
        }}
        onPress={() => {
          Animated.timing(rotationValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }).start(() => {
              rotationValue.setValue(0);
              setRotation(rotation + 180);
              navigation.navigate('WritePost');
          });
        }}
      >
        <Text>
          {/* <Icon name="laptop-chromebook" color="#5d00fd55" size={24} /> */}
          <Octicons name="plus" color="#eee" size={32} />
        </Text>
      </TouchableOpacity>
      {/* <Button
        title='홈'
        onPress={() => {navigation.navigate('Home')}}
      /> */}
    </SafeAreaView>
    
  );
}

export default WriteBtnComponent;