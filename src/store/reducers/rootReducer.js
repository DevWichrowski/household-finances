import { combineReducers } from "redux";
import { balanceReducer } from "./balanceReducer";

export const rootReducer = combineReducers({
  balanceInfo: balanceReducer,
});
