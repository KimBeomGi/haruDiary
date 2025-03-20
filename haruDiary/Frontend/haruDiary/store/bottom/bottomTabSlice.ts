import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface BottomTabState {
  value: number
}

const initialState: BottomTabState = {
  value: 0,
}

export const bottomTabSlice = createSlice({
  name: 'bottomTab',
  initialState,
  reducers: {
    selectTab: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { selectTab } = bottomTabSlice.actions

export default bottomTabSlice.reducer