import axios from "axios";
import { ActionTypes } from "../_ActionType/ActionType";

 
 

export const setUrlSubmission = (url) => {
  return {
    type: ActionTypes.URL_SUBMITTED_SUCCESS,
    payload: url,
  };
};


export const setUrlPullData  = (url) => {
    return {
      type: ActionTypes.URL_PULL_SUCCESS,
      payload: url,
    };
};
  
 

export const requestUrlShortenerActions = (urls) => {
    return async (dispatch, getState) => {
        const { userstore } = getState();
        console.log(userstore.token, 'dddds' , urls );
     await  axios.post("http://127.0.0.1:8000/api/url", {
      "long_url" : `{$urls}`
    }, {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userstore.token}`,
          },
    }).then((response) => {
        console.log(response, "======");
      })
      .catch((error) => {
        console.error(error, " error ====");
      });
  };
};
 

export const requestUrlByUser = () => {
    return async (dispatch, getState) => {
        const { userstore } = getState();
        console.log(userstore.token, 'dddds'  );
     await  axios.get("http://127.0.0.1:8000/api/url", {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userstore.token}`,
          },
    }).then((response) => {
        dispatch(setUrlPullData(response.data.data));
        console.log(response, "======");
      })
      .catch((error) => {
        console.error(error, " error ====");
      });
  };
};
 

export const requestUrlById = (idx) => {
    return async (dispatch, getState) => {
        const { userstore } = getState();
        console.log(userstore.token, 'dddds'  );
     await  axios.get(`http://127.0.0.1:8000/api/url/${idx}`, {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userstore.token}`,
          },
    }).then((response) => {
        // dispatch(setUrlPullData(response.data.data));
        console.log(response, "======");
      })
      .catch((error) => {
        console.error(error, " error ====");
      });
  };
};
 
export const requestIpRedirect = () => {
    return async (dispatch, getState) => {
        const { userstore } = getState();
        console.log(userstore.token, 'dddds'  );
     await  axios.get(`http://127.0.0.1:8000/api/ip_redirection`, {
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userstore.token}`,
          },
    }).then((response) => {
        // dispatch(setUrlPullData(response.data.data));
        console.log(response, "======");
      })
      .catch((error) => {
        console.error(error, " error ====");
      });
  };
};
 