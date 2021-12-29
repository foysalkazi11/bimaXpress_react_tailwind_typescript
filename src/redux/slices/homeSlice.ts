import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type homeSliceState = {
  counter: object;
  caseData: object;
  currentMenu: string;
};

const initialState: homeSliceState = {
  counter: {},
  caseData: {},
  currentMenu: "Home",
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
    setCurrentMenu: (state, action: PayloadAction<string>) => {
      state.currentMenu = action?.payload;
    },
  },
});

export const { setCounter, setCaseData, setCurrentMenu } = homeSlice?.actions;

export default homeSlice?.reducer;
