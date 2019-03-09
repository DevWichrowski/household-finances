import * as GoalsAction from '../actions/goalsAction';

const initialState = {
	goals: [ { id: '_aweq13221', goalTitle: 'Na motocykl', fundsNeeded: 1000, currentFunds: 100 } ],
	transferCount: [ { goalTitle: 'Na motocykl', totalFunds: 100 } ]
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
				],
				transferCount: [ ...state.transferCount, { goalTitle: action.payload.goalTitle, totalFunds: 0 } ]
			};
		}

		case GoalsAction.DELETE_GOAL: {
			return { ...state, goals: state.goals.filter((goal) => goal.id !== action.payload) };
		}

		case GoalsAction.SEND_TO_GOAL_SUCCESS: {
			return {
				...state,
				goals: state.goals.map(
					(goal) =>
						goal.id === action.payload.id
							? { ...goal, currentFunds: goal.currentFunds + action.payload.funds }
							: goal
				),
				transferCount: state.transferCount.map((transfer) => {
					if (transfer.goalTitle === action.payload.category) {
						return {
							...transfer,
							totalFunds: transfer.totalFunds + action.payload.funds,
							goalTitle: action.payload.category
						}
					} else {
						return transfer;
					}
				})
			};
		}

		default: {
			return state;
		}
	}
}
