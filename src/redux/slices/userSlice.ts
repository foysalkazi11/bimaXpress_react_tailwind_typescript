import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SideTrayState = {
  user: string;
  role: string;
};

const initialState: SideTrayState = {
  user: "abnew@gmail.com",
  role: "admin",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action?.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action?.payload;
    },
  },
});

export const { setUser, setRole } = userSlice?.actions;

export default userSlice?.reducer;
