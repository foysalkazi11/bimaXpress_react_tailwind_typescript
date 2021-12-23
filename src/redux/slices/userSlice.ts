import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SideTrayState = {
  user: string;
};

const initialState: SideTrayState = {
  user: "abnew@gmail.com",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action?.payload;
    },
  },
});

export const { setUser } = userSlice?.actions;

export default userSlice?.reducer;
