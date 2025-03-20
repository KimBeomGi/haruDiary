import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, Text, View, Button, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigations/AppNavigator'; // RootStackParamList를 가져옵니다.


import type { RootState } from '../../../store/store'; 
import { useSelector, useDispatch } from 'react-redux'

import {getStyles} from '../../styles/styles';

import RadioBtnGroup from '../../components/RadioBtnGroup';
import { isLightGet, isLightSet, whatFontGet, whatFontSet } from '../../asyncStorage/asyncStorage';
import { setFontFamily, setFontSize } from '../../../store/font/fontSlice';



type FontModeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'FontMode'>;


function FontModeScreen(): React.JSX.Element {
  const navigation = useNavigation<FontModeScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  const [selectedFont, setSelectedFont] = useState('기본'); // 선택된 모드 상태 관리
  const [selected, setSelected] = useState(0)
  const [isCheck, setIsCheck] = useState(false)
  const fontfamily = useSelector((state: RootState) => state.font.fontFamily)
  const [lorem, setLorem] = useState("우는 날들을 이런 없이 향할 회한도 걸 왔을까? 그 마른 동산에 너무나 하나였던 보내 시각에 타는 때. 건너온 기억해주오 편지도 하늘을 불러주던 밤을 잎들은 위에도 말했다. \n\n목란배 내지 번을 했던 아무 이네들은 있다. 부드럽게, 나는 별에도 생을 아무것도 이름자를 자신을 청명한 하나였던 이름과, 지우지 꽃을 생명을 가을 말없이 말 오매불망 아니라 했다.")

  const handleSelect = (textName: string, selectedIndex: number) => {
    setSelectedFont(textName);
    console.log(`Selected mode: ${textName}, index: ${selectedIndex}`);
    // // 선택된 모드에 따라 필요한 작업 수행
    whatFontSet(textName, selectedIndex)
    // // store에 작업
    let fontFamily: 'basic' | '1st' | '2nd' | '3rd' | '4th' = 'basic';
    if (selectedIndex === 0) fontFamily = 'basic';
    if (selectedIndex === 1) fontFamily = '1st';
    if (selectedIndex === 2) fontFamily = '2nd';
    if (selectedIndex === 3) fontFamily = '3rd';
    if (selectedIndex === 4) fontFamily = '4th';
    dispatch(setFontFamily(fontFamily));
  };

  useFocusEffect(
    React.useCallback(() => {
      // promise 때문에 async를 이용해줌
      const fetchMode = async () => {
        const value = await whatFontGet();
        // console.log(value);
        if (value) {
          setSelectedFont(value.textName);
          setSelected(value.selectedIndex);
          setIsCheck(true)  // value가 들어온 후에 렌더링하기 위함.
          if(value.selectedIndex === 0){
            dispatch(setFontFamily('basic'))
          }else if(value.selectedIndex === 1){
            dispatch(setFontFamily('1st'))
          }else if(value.selectedIndex === 2){
            dispatch(setFontFamily('2nd'))
          }else if(value.selectedIndex === 3){
            dispatch(setFontFamily('3rd'))
          }else{
            dispatch(setFontFamily('4th'))
          }
        }
      };
      fetchMode();
  
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
      };
    }, [dispatch])
  );

  return (
    <SafeAreaView
      style = {[styles.container, styles.pdhr2]}
    >
      <ScrollView>
        {/* 폰트 사이즈 */}
        <TextInput
          editable ={true}
          multiline = {true}
          style={[styles.textInput, styles.fs2]}
          onChangeText={(text)=> {return setLorem(text)}}
          value={lorem}
        />
        <View>
          <Text
            style={[styles.fs3, styles.fw2]}
          >
            폰트 사이즈
          </Text>
          {/* 슬라이더 */}
          {/* 라이브러리 이용해야겠군. */}
          <View>

          </View>
        </View>

        {/* 폰트 패밀리 */}
        <View
          style={[styles.mgvr1]}
        >
          <Text
            style={[styles.fs3, styles.fw2]}
          >
            폰트
          </Text>
        </View>
        {isCheck && (
          <RadioBtnGroup
            names={[
              {textName :'나눔명조', iconName : null, selected : 0},
              {textName :'나눔손글씨 고려글꼴', iconName : null, selected : 1},
              {textName :'순바탕', iconName : null, selected : 2},
              {textName :'온글잎 김콩해', iconName : null, selected : 3},
              {textName :'안동 이육사체', iconName : null, selected : 4},
              {textName :'고도체', iconName : null, selected : 5},
            ]}
            onSelect={handleSelect} // 콜백 함수 전달
            selected={selected} // 선택된 라디오 버튼 인덱스 전달
          />
        )}
        {/* <Text>{fontfamily}</Text> */}
        
      </ScrollView>
    </SafeAreaView>
    
  );
}

export default FontModeScreen;