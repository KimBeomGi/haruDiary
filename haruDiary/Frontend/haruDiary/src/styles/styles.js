import { StyleSheet } from 'react-native';
import { store } from '../../store/store'
import { useEffect } from 'react';

// 색상 상수 객체 생성
const DARK_COLORS = {
  bgColor: '#1C1D1F',
  textColor : "#a0a0a0",
  bottomBgColor : "#363940",
  // 다른 색상 상수 추가
};

const LIGHT_COLORS = {
  bgColor: '#FFFFFF',
  textColor : "#000000",
  bottomBgColor : "#f5f5f5",
  // 다른 색상 상수 추가
};

// 테마에 따라 스타일 생성
export const getStyles = () => {
  const isDarkMode = store.getState().theme.isDarkMode; // Redux 상태 가져오기
  const COLORS = isDarkMode ? DARK_COLORS : LIGHT_COLORS;

  return StyleSheet.create({
    bgColor : {
      backgroundColor : COLORS.bgColor,
    },
    container: {
      flex: 1,
      backgroundColor: COLORS.bgColor, // 배경색 동적 설정
    },
    content: {
      flex: 1,
      marginHorizontal: 16,
    },
    // button1: {
    //   paddingVertical: 8,
    //   backgroundColor: COLORS.bgColor,
    // },
    // RadioBtnItem
    radioBtnItem: {
      flexDirection : "row",
      // justifyContent : 'center',
      justifyContent: "space-between",
      alignItems : 'center',
    },
    radioSelectBtn : {
      height: 20, // fs3 사이즈
      width: 20,  // fs3 사이즈
      borderRadius : 10,  // fs3 절반사이즈
      borderColor : COLORS.textColor,
      borderStyle : "solid",
      borderWidth : 1,
    },
    selectedCircle: {
      backgroundColor: '#c041ff', // 선택된 원의 배경색
      borderColor: '#c041ff',
    },
    dRow : {
      flexDirection : "row",
      alignItems : 'center', // 가지런하게 좌우 열이 맞게.
    },
    center : {
      justifyContent : 'center',
      alignItems : 'center',
    },
    fs0 : {
      fontSize : 8,
      color : COLORS.textColor,
    },
    fs1 : {
      fontSize : 12,
      color : COLORS.textColor,
    },
    fs2 : {
      fontSize : 16,
      color : COLORS.textColor,
    },
    fs3 : {
      fontSize : 20,
      color : COLORS.textColor,
    },
    fs4 : {
      fontSize : 24,
      color : COLORS.textColor,
    },
    fs5 : {
      fontSize : 28,
      color : COLORS.textColor,
    },
    fs6 : { // 사용할 일 없을 듯
      fontSize : 32,
      color : COLORS.textColor,
    },
    fw1 : { // 기본
      fontWeight : "400"
    },
    fw2 : {
      fontWeight : "600"
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
    mghr1 : {
      marginHorizontal : 8
    },
    mghr2 : {
      marginHorizontal : 16
    },
    mgvr1 : {
      marginVertical : 8
    },
    mgvr2 : {
      marginVertical : 16
    },

    textInput: {
      height: 200,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },

    // bottom tab 전용
    btmContainer: {
      backgroundColor : COLORS.bottomBgColor,
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical : 8,
      borderTopWidth: 1,
      borderTopColor: '#a0a0a0',
    },
    btmEachPosition: {
      alignItems: 'center',
    }
  });
};