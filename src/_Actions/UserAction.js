import axios from "axios";
import { ActionTypes } from "../_ActionType/ActionType";

export const setLoginData = (user) => {
  return {
    type: ActionTypes.USER_LOGIN_SUCCESS,
    payload: user,
  };
};

export const setLoginError = (error) => {
  return {
    type: ActionTypes.USER_LOGIN_ERROR,
    payload: error,
  };
};

export const requestLoginAction = (const first = useRef(second)) => {
  return async (dispatch, action) => {
    const response = await axios
      .post("https://api.twitter.com/1.1/account", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        dispatch(setLoginData(response.data));
        console.log(response, "======");
      })
      .catch((error) => {
        dispatch(setLoginError(error));
        console.error(error, " error ====");
      });
  };
};
