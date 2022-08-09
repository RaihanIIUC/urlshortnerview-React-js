import { combineReducers } from "redux";
import UrlShortenerRedecuers from "./UrlShotnerReducers";
import UserLoginReducers from "./UserLoginReducer";

export const mainReducer = combineReducers({
  userstore: UserLoginReducers,
  shorturl : UrlShortenerRedecuers
});
