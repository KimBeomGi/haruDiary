import { StyleSheet } from 'react-native';
import { store } from '../../store/store'
import { useEffect } from 'react';

// 색상 상수 객체 생성
const DARK_COLORS = {
  bgColor: '#1C1D1F',
  textColor : "#a0a0a0"
  // 다른 색상 상수 추가
};

const LIGHT_COLORS = {
  bgColor: '#FFFFFF',
  textColor : "#000000"
  // 다른 색상 상수 추가
};

// 테마에 따라 스타일 생성
export const getStyles = () => {
  const isDarkMode = store.getState().theme.isDarkMode; // Redux 상태 가져오기
  const COLORS = isDarkMode ? DARK_COLORS : LIGHT_COLORS;

  return StyleSheet.create({
    bgColor : {
      backgroundColor : COLORS.bgColor
    },
    container: {
      flex: 1,
      backgroundColor: COLORS.bgColor, // 배경색 동적 설정
    },
    content: {
      flex: 1,
      marginHorizontal: 16,
    },
    button1: {
      paddingVertical: 8,
      backgroundColor: COLORS.bgColor,
    },
    // RadioBtnItem
    radioBtnItem: {
      flexDirection : "row",
      // justifyContent : 'center',
      justifyContent: "space-between",
      alignItems : 'center',
    },
    radioSelectBtn : {
      height: 20,
      width: 20,
      borderRadius : 10,
      borderColor : COLORS.textColor,
      borderStyle : "solid",
      borderWidth : 1,
    },
    selectedCircle: {
      backgroundColor: '#c041ff', // 선택된 원의 배경색
      borderColor: '#c041ff',
    },
    fs1 : {
      fontSize : 20,
      color : COLORS.textColor,
    },
    pdhr1 : {
      paddingHorizontal : 8
    },
    pdhr2 : {
      paddingHorizontal : 16
    },
    pdvr1 : {
      paddingVertical : 8,
    },
    pdvr2 : {
      paddingVertical : 16,
    },
  });
};