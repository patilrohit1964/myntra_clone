import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { reducer as productReducer } from "./reducers/productReducer";
import { reducer as authReducer } from "./reducers/authReducer";
const rootReducer = combineReducers({ productReducer, authReducer });
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
