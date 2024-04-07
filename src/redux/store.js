import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import {themeReducer,todoreducer } from "./todoReducer";
import { loginreducer } from "./todoReducer";

let rootreducer = combineReducers({
    todo:todoreducer,
    theme:themeReducer,
    auth:loginreducer
})

export const store = legacy_createStore(rootreducer);