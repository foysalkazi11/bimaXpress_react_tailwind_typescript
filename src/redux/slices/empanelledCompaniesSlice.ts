import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type empanelledCompaniesState = {
  empanelledCompaniesList: {};
};

const initialState: empanelledCompaniesState = {
  empanelledCompaniesList: {},
};

export const empanelledCompaniesSlice = createSlice({
  name: "empanelledCompanies",
  initialState,
  reducers: {
    setEmpanelledCompaniesListList: (state, action: PayloadAction<{}>) => {
      state.empanelledCompaniesList = action?.payload;
    },
  },
});

export const { setEmpanelledCompaniesListList } =
  empanelledCompaniesSlice?.actions;

export default empanelledCompaniesSlice?.reducer;
