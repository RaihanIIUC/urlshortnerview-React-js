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

export const requestLoginAction = (user) => {
  console.log(user);

  return async (dispatch, action) => {
    await axios
      .post(
        "https://www.bdappsandroid.com/urlshortnerfunction/api/login",
        {
          email: "raidd443@gmail.com",
          password: "123456",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
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
