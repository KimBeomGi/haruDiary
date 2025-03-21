import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { useColorScheme } from 'react-native';

// const systemColorScheme = useColorScheme();

interface FontState {
  fontFamily: string;
  fontSize : number;
}

const initialState: FontState = {
  fontFamily: 'NanumMyeongjo', // 기본 폰트는 일단 'basic'
  fontSize : 16, // 기본 폰트 사이즈는 16
};

const fontSlice = createSlice({
  name: 'font',
  initialState,
  reducers: {
    setFontFamily: (state, action: PayloadAction<string>) => {
      state.fontFamily = action.payload;
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontSize = action.payload;
    },
  },
});

export const { setFontFamily, setFontSize} = fontSlice.actions;
export default fontSlice.reducer;