import { combineReducers } from "redux";
import { userReducer } from "./useReducer/reducer";

export const RootReducer = combineReducers([
    userReducer
])