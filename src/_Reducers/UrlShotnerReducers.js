import { ActionTypes } from "../_ActionType/ActionType";

const initialState = {
    currUrl: [],
    allurl : []
};

const UrlShortenerRedecuers = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.URL_SUBMITTED_SUCCESS:
      return { ...state, currUrl : action.payload  };
  
    case ActionTypes.URL_PULL_SUCCESS:
        return { ...state, allurl : action.payload  };
    
    default:
      return state;
  }
};

export default UrlShortenerRedecuers;
