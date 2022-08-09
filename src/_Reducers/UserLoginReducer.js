import { ActionTypes } from "../_ActionType/ActionType";

const initialState = {
  currentUser: [],
  error: [],
  token: [],
  loggedIn: false
};

const UserLoginReducers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.USER_LOGIN_SUCCESS:
      return { ...state, currentUser: action.payload , loggedIn: true  };
    case ActionTypes.USER_TOKEN:
      return { ...state, token: action.payload };
    
    case ActionTypes.USER_LOG_OUT:
       return { ...state, token: [] , currentUser: []  , loggedIn: false};
  
    case ActionTypes.USER_LOGIN_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default UserLoginReducers;
