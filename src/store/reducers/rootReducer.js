import { combineReducers } from "redux";
import { test } from "./test";

export const rootReducer = combineReducers({
  testInfo: test
});
