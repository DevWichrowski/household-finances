export const ADD_GOAL = '[Goals] - ADD_GOAL';

export const addGoal = (payload) => ({
	type: ADD_GOAL,
	currentFunds: 0,
	payload
});
