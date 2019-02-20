import * as GoalsAction from '../actions/goalsAction';

const initialState = {
    goals: [
		{goalTitle: 'test', currentFunds: 100, fundsNeeded: 1000}
    ],
};

export function goalsReducer(state = initialState, action) {
	switch (action.type) {
		case GoalsAction.ADD_GOAL: {
            return { ...state, goals: [ ...state.goals, action.payload ] };
        }
        
		default: {
			return state;
		}
	}
}