import * as BalanceAction from '../actions/balanceAction';

const initialState = {
	balance: 5000,
	operations: []
};

export function balanceReducer(state = initialState, action) {
	switch (action.type) {
		case BalanceAction.ADD_CREDITS: {
			return { ...state, balance: state.balance + action.payload.funds, operations: [...state.operations, action.payload]};
		}
		case BalanceAction.WITHDRAW_CREDITS: {
			return { ...state, balance: state.balance - action.payload.funds, operations: [...state.operations, action.payload]};
		}

		default: {
			return state;
		}
	}
}
