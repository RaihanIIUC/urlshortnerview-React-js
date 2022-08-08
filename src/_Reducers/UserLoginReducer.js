import { ActionTypes } from "../_ActionType/ActionType";

const initialState = {
  currentUser: [],
  error: [],
};

const UserLoginReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_SUCCESS:
      return { ...state, currentUser: action.payload };
    case ActionTypes.USER_LOGIN_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default UserLoginReducers;
