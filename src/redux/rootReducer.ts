import { combineReducers } from "redux";
import utilityReducer from "./slices/utilitySlice";
import userReducer from "./slices/userSlice";
import doctorReducer from "./slices/doctorSlice";
import analystReducer from "./slices/analystSlice";
import hospitalReducer from "./slices/hospitalSlice";

const rootReducer = combineReducers({
  utility: utilityReducer,
  user: userReducer,
  doctor: doctorReducer,
  analyst: analystReducer,
  hospital: hospitalReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
