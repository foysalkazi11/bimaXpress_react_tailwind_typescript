import { combineReducers } from "redux";
import utilityReducer from "./slices/utilitySlice";
import userReducer from "./slices/userSlice";
import doctorReducer from "./slices/doctorSlice";
import analystReducer from "./slices/analystSlice";
import hospitalReducer from "./slices/hospitalSlice";
import empanelledCompaniesSlice from "./slices/empanelledCompaniesSlice";

const rootReducer = combineReducers({
  utility: utilityReducer,
  user: userReducer,
  doctor: doctorReducer,
  analyst: analystReducer,
  hospital: hospitalReducer,
  empanelledCompanies: empanelledCompaniesSlice,
});

// export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
