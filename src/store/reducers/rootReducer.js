import { combineReducers } from 'redux';
import { balanceReducer } from './balanceReducer';
import { goalsReducer } from './goalsReducer';

export const rootReducer = combineReducers({
	balanceInfo: balanceReducer,
	goalsInfo: goalsReducer
});
