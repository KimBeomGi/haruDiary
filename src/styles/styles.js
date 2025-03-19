import { StyleSheet } from 'react-native';

// 색상 상수 객체 생성
const DARK_COLORS = {
  white: '#1C1D1F',
  // 다른 색상 상수 추가
};

const LIGHT_COLORS = {
  white: '#FFFFFF',
  // 다른 색상 상수 추가
};

// 현재 테마에 따라 색상 선택
const isLightTheme = true; // 테마 상태를 관리하는 변수 (예시)
const COLORS = isLightTheme ? LIGHT_COLORS : DARK_COLORS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor : "#345334"
  },
  content: {
    flex: 1,
    marginHorizontal : 16,
  },
  button1: {
    paddingVertical : 8
  },
});

export default styles;