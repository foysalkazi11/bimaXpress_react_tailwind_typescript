import { combineReducers } from "redux";
import utilityReducer from "./slices/utilitySlice";
import userReducer from "./slices/userSlice";
import DoctorReducer from "./slices/doctorSlice";

const rootReducer = combineReducers({
  utility: utilityReducer,
  user: userReducer,
  doctor: DoctorReducer,
});

// export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
