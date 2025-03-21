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
import { setFontFamily, setFontSizeValue } from '../../../store/font/fontSlice';
import { selectTab } from '../../../store/bottom/bottomTabSlice';
import Slider from '@react-native-community/slider';



type FontModeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'FontMode'>;


function FontModeScreen(): React.JSX.Element {
  const navigation = useNavigation<FontModeScreenNavigationProp>()
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()
  const styles = getStyles()
  const [selectedFont, setSelectedFont] = useState('기본'); // 선택된 모드 상태 관리
  const [selected, setSelected] = useState(0)
  const [isCheck, setIsCheck] = useState(false)
  const fontFamily = useSelector((state: RootState) => state.font.fontFamily)
  const fontSizeValue = useSelector((state: RootState) => state.font.fontSizeValue)
  const [preparedFonts, setPreparedFonts] = useState([
    ["나눔명조", "NanumMyeongjo"], ["나눔손글씨 고려글꼴","NanumGoRyeoGeurGgor"], ["순바탕", "SunBatang-Medium"], 
    ["온글잎 김콩해", "KimKongHae"], ["안동 이육사체", "ANDONG 264 TTF"], ["고도체", "GodoM"]
  ])
  const [lorem, setLorem] = useState("우는 날들을 이런 없이 향할 회한도 걸 왔을까? 그 마른 동산에 너무나 하나였던 보내 시각에 타는 때. 건너온 기억해주오 편지도 하늘을 불러주던 밤을 잎들은 위에도 말했다. \n\n목란배 내지 번을 했던 아무 이네들은 있다. 부드럽게, 나는 별에도 생을 아무것도 이름자를 자신을 청명한 하나였던 이름과, 지우지 꽃을 생명을 가을 말없이 말 오매불망 아니라 했다.")

  // 폰트사이즈
  const [fontSizeValueStep, setFontSizeValueStep] = useState(
    ['더 작게', '작게', '보통', '크게', '더 크게']
  )

  // 라디오 버튼에 들어갈 내용들을 만들어주는 함수
  const getRadioBtnNames = (fonts: string[][]): { textName: string; textFont: string; iconName: null; selected: number }[] => {
    return fonts.map((font, index) => ({
      textName: font[0],
      textFont: font[1],
      iconName: null,
      selected: index,
    }));
  };

  const handleSelect = (textName: string, selectedIndex: number) => {
    setSelectedFont(textName);
    // console.log(`Selected mode: ${textName}, index: ${selectedIndex}`);
    // // 선택된 모드에 따라 필요한 작업 수행
    whatFontSet(textName, preparedFonts[selectedIndex][1], selectedIndex)
    // // store에 작업
    let fontFamily = preparedFonts[selectedIndex][1]
    dispatch(setFontFamily(fontFamily));
  };

  useFocusEffect(
    React.useCallback(() => {
      dispatch(selectTab(3))// bottomtab의 표시
      // promise 때문에 async를 이용해줌
      const fetchMode = async () => {
        const value = await whatFontGet();
        // console.log(value);
        if (value) {
          setSelectedFont(value.textName);
          setSelected(value.selectedIndex);
          dispatch(setFontFamily(preparedFonts[value.selectedIndex][1]))
          setIsCheck(true)  // value가 들어온 후에 렌더링하기 위함.
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
            <Slider
              // style={{width: 300, height: 40}}
              style={{height: 60}}
              value={fontSizeValue}
              onValueChange={(value) => {return dispatch(setFontSizeValue(value))}}
              minimumValue={0}
              maximumValue={4}
              minimumTrackTintColor="#74c1ff"
              maximumTrackTintColor="#74c1ff"
              thumbTintColor="#5a7f28"
              step={1}
            />
            <Text
             style={[styles.fs2]}
            >
              {fontSizeValueStep[fontSizeValue]}
            </Text>
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
            names={getRadioBtnNames(preparedFonts)}
            onSelect={handleSelect} // 콜백 함수 전달
            selected={selected} // 선택된 라디오 버튼 인덱스 전달
          />
        )}
        <Text>{fontFamily}</Text>
        
      </ScrollView>
    </SafeAreaView>
    
  );
}

export default FontModeScreen;