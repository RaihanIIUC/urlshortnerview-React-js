import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { mainReducer } from "../_Reducers";

const consoleEnhancer = composeWithDevTools(applyMiddleware(thunk));

export const store = createStore(mainReducer, consoleEnhancer);
