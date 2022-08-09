import axios from "axios";
import { ActionTypes } from "../_ActionType/ActionType";

export const setLoginData = (user) => {
  return {
    type: ActionTypes.USER_LOGIN_SUCCESS,
    payload: user,
  };
};

export const setToken = (token) => {
  return {
    type: ActionTypes.USER_TOKEN,
    payload: token
  };
};

export const setLoginError = (error) => {
  return {
    type: ActionTypes.USER_LOGIN_ERROR,
    payload: error,
  };
};

export const setUserLogOut = () => {
  return {
    type: ActionTypes.USER_LOG_OUT,
  };
};

export const requestLoginAction = (user) => {
  return async (dispatch, action) => {
    await  axios.post("http://127.0.0.1:8000/api/login", {
      "email" : user?.email,
      "password" : user?.password
    }, {
      headers: {'Content-Type': 'application/json'}
    }).then((response) => {
        dispatch(setLoginData(response.data));
        dispatch(setToken(response.data.data.token));
        console.log(response.data.data.token, "======");
      })
      .catch((error) => {
        dispatch(setLoginError(error));
        console.error(error, " error ====");
      });
  };
};


export const LogOutAction = () => {
  return async (dispatch, action) => {
    dispatch(setUserLogOut());

  }
  
}