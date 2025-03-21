import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { useColorScheme } from 'react-native';

// const systemColorScheme = useColorScheme();

interface FontState {
  fontFamily: string;
  fontSizeValue : number;
}

const initialState: FontState = {
  fontFamily: 'NanumMyeongjo', // 기본 폰트는 일단 'basic'
  fontSizeValue : 2, // 기본 폰트 사이즈는 2
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