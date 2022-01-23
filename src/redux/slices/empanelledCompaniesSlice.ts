import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type empanelledCompaniesState = {
  empanelledCompaniesList: {};
  allCompaniesList: {};
  empanelledInsurnaceCompanies: [];
  empanelledTpaCompanies: [];
};

const initialState: empanelledCompaniesState = {
  empanelledCompaniesList: {},
  allCompaniesList: {},
  empanelledInsurnaceCompanies: [],
  empanelledTpaCompanies: [],
};

export const empanelledCompaniesSlice = createSlice({
  name: "empanelledCompanies",
  initialState,
  reducers: {
    setEmpanelledCompaniesListList: (state, action: PayloadAction<{}>) => {
      state.empanelledCompaniesList = action?.payload;
    },
    setAllCompaniesList: (state, action: PayloadAction<{}>) => {
      state.allCompaniesList = action?.payload;
    },
    setEmpanelledInsurnaceCompanies: (state, action: PayloadAction<[]>) => {
      state.empanelledInsurnaceCompanies = action?.payload;
    },
    setEmpanelledTpaCompanies: (state, action: PayloadAction<[]>) => {
      state.empanelledTpaCompanies = action?.payload;
    },
  },
});

export const {
  setEmpanelledCompaniesListList,
  setAllCompaniesList,
  setEmpanelledInsurnaceCompanies,
  setEmpanelledTpaCompanies,
} = empanelledCompaniesSlice?.actions;

export default empanelledCompaniesSlice?.reducer;
