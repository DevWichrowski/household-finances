export const ADD_GOAL = '[Goals] - ADD_GOAL';
export const DELETE_GOAL = '[Goals - REMOVE_GOAL]';

const generateID = () => {
	return '_' + Math.random().toString(36).substr(2, 9);
};

export const addGoal = (payload) => ({
	id: generateID(),
	type: ADD_GOAL,
	currentFunds: 0,
	payload
});

export const deleteGoal = (payload) => ({
	type: DELETE_GOAL,
	payload
});
