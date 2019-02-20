import * as GoalsAction from '../actions/goalsAction';

const initialState = {
	goals: [ { goalTitle: 'Na motocykl', fundsNeeded: 1000, currentFunds: 100, } ]
};

export function goalsReducer(state = initialState, action) {
	switch (action.type) {
		case GoalsAction.ADD_GOAL: {
			return {
				...state,
				goals: [
					...state.goals,
					{
						goalTitle: action.payload.goalTitle,
						fundsNeeded: action.payload.fundsNeeded,
						currentFunds: action.currentFunds
					}
				]
			};
		}

		default: {
			return state;
		}
	}
}
