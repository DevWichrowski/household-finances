import * as GoalsAction from '../actions/goalsAction';

const initialState = {
	goals: [ { id: '_aweq13221', goalTitle: 'Na motocykl', fundsNeeded: 1000, currentFunds: 100 } ]
};

export function goalsReducer(state = initialState, action) {
	switch (action.type) {
		case GoalsAction.ADD_GOAL: {
			return {
				...state,
				goals: [
					...state.goals,
					{
						id: action.id,
						goalTitle: action.payload.goalTitle,
						fundsNeeded: action.payload.fundsNeeded,
						currentFunds: action.currentFunds
					}
				]
			};
		}

		case GoalsAction.DELETE_GOAL: {
			return { ...state, goals: state.goals.filter((goal) => goal.id !== action.payload) };
		}

		case GoalsAction.SEND_TO_GOAL_SUCCESS: {
			return { ...state, goals: [ ...state.goals, action.payload ] };
		}
		default: {
			return state;
		}
	}
}
