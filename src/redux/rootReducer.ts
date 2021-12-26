import { combineReducers } from "redux";
import utilityReducer from "./slices/utilitySlice";
import userReducer from "./slices/userSlice";
import doctorReducer from "./slices/doctorSlice";
import analystReducer from "./slices/analystSlice";
import hospitalReducer from "./slices/hospitalSlice";
import empanelledCompaniesReducer from "./slices/empanelledCompaniesSlice";
import planReducer from "./slices/planSlice";

const rootReducer = combineReducers({
  utility: utilityReducer,
  user: userReducer,
  doctor: doctorReducer,
  analyst: analystReducer,
  hospital: hospitalReducer,
  empanelledCompanies: empanelledCompaniesReducer,
  plan: planReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
