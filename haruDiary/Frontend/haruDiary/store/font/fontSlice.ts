import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { useColorScheme } from 'react-native';

// const systemColorScheme = useColorScheme();

interface FontState {
  fontFamily: string;
  fontSizeValue : number;
  fsRate: number[];
  preparedFonts: string[][];
}

const initialState: FontState = {
  fontFamily: 'NanumMyeongjo', // 기본 폰트는 일단 'basic'
  fontSizeValue : 2, // 기본 폰트 사이즈는 2
  fsRate: [0.75, 0.825, 1, 1.125, 1.25],
  preparedFonts : [
    ["나눔명조", "NanumMyeongjo"], ["나눔손글씨 고려글꼴","NanumGoRyeoGeurGgor"], ["순바탕", "SunBatang-Medium"], 
    ["온글잎 김콩해", "KimKongHae"], ["안동 이육사체", "ANDONG 264 TTF"], ["고도체", "GodoM"]
  ]
};

const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    setFontSizeValue: (state, action: PayloadAction<number>) => {
      state.fontSizeValue = action.payload;
    },
  },
});

export const { setFontFamily, setFontSizeValue} = fontSlice.actions;
export default fontSlice.reducer;