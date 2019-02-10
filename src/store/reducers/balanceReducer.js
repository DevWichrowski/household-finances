import * as BalanceAction from '../actions/balanceAction';

const initialState = {
	balance: 5000,
	operations: []
};

export function balanceReducer(state = initialState, action) {
	switch (action.type) {
		case BalanceAction.ADD_CREDITS: {
			return {
				...state,
				balance: state.balance + action.payload,
				operations: [
					...state.operations,
					{ funds: action.payload, operationType: action.operationType, operationDate: action.operationDate }
				]
			};
		}
		case BalanceAction.WITHDRAW_CREDITS: {
			return {
				...state,
				balance: state.balance - action.payload,
				operations: [
					...state.operations,
					{ funds: action.payload, operationType: action.operationType, operationDate: action.operationDate }
				]
			};
		}

		default: {
			return state;
		}
	}
}
