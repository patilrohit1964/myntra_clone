import { ADD_USER } from "../actionTypes/actionType";

export const ADD_USER_Token = (token) => (dispatch) => {
  dispatch({ type: ADD_USER, payload: token });
};
