import moment from 'moment';

const currentDate = moment(new Date()).format('DD-MM-YYYY, H:mm');

const generateID = () => {
	return '_' + Math.random().toString(36).substr(2, 9);
};

export const ADD_CREDITS = '[Balance] - ADD CREDITS';
export const WITHDRAW_CREDITS = '[Balance] - WITHDRAW CREDITS';

export const addCredits = (payload) => ({
	id: generateID(),
	type: ADD_CREDITS,
	operationType: 'addOperation',
	operationDate: currentDate,
	payload
});

export const withdrawCredits = (payload) => ({
	id: generateID(),
	type: WITHDRAW_CREDITS,
	operationType: 'withdrawOperation',
	operationDate: currentDate,
	payload
});
