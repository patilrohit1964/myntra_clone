import { ADD_USER } from "../actionTypes/actionType";

const initialstate = {
  auth: null,
};

export const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        auth: action.payload,
      };
    default:
      return state;
  }
};
