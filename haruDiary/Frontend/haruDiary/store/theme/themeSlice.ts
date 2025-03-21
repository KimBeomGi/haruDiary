import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { useColorScheme } from 'react-native';

// const systemColorScheme = useColorScheme();

interface ThemeState {
  mode: 'light' | 'dark' | 'system';
  isDarkMode : boolean;
  preparedTheme : [string, 'light' | 'dark' | 'system', string][];
}

const initialState: ThemeState = {
  // mode: systemColorScheme || 'light',
  mode: 'light', // 기본 모드는 'light'
  isDarkMode : false,
  preparedTheme : [
    ["라이트 모드", "light", "light-mode"], ["다크 모드", "dark", "dark-mode"], ["시스템 모드", "system", "wb-twilight"],
  ]
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark' | 'system'>) => {
      state.mode = action.payload;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});

export const { setTheme, setIsDarkMode } = themeSlice.actions;
export default themeSlice.reducer;