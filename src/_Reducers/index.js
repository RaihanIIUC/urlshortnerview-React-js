import { combineReducers } from "redux";
import UserLoginReducers from "./UserLoginReducer";

export const mainReducer = combineReducers({
  userstore: UserLoginReducers,
});
