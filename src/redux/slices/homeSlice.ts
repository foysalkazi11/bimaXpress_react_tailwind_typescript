import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type homeSliceState = {
  counter: object;
  caseData: object;
};

const initialState: homeSliceState = {
  counter: {},
  caseData: {},
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setCounter: (state, action: PayloadAction<object>) => {
      state.counter = action?.payload;
    },
    setCaseData: (state, action: PayloadAction<object>) => {
      state.caseData = action?.payload;
    },
  },
});

export const { setCounter, setCaseData } = homeSlice?.actions;

export default homeSlice?.reducer;
