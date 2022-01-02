import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type mailSliceState = {
  composeMailStatus: string;
};

const initialState: mailSliceState = {
  composeMailStatus: "new",
};

export const mailSlice = createSlice({
  name: "mail",
  initialState,
  reducers: {
    setComposeMailStatus: (state, action: PayloadAction<string>) => {
      state.composeMailStatus = action?.payload;
    },
  },
});

export const { setComposeMailStatus } = mailSlice?.actions;

export default mailSlice?.reducer;
