import { combineReducers, Reducer } from "redux";
import { userReducer } from "./useReducer/reducer";

export const rootReducer = combineReducers([
    userReducer
])

export type RootReducer = ReturnType<typeof rootReducer>