import * as BalanceAction from '../actions/balanceAction';

const initialState = {
	balance: 5000,
	operations: [
		{
			id: '_asd123eas',
			funds: 5000,
			operationType: 'addOperation',
			operationDate: '10-02-2019, 17:35',
			category: 'wypłata'
		}
	],
	addCategories: [ 'bez kategori', 'wypłata', 'dług' ]
};

export function balanceReducer(state = initialState, action) {
	switch (action.type) {
		case BalanceAction.ADD_CREDITS: {
			return {
				...state,
				balance: state.balance + action.payload.funds,
				operations: [
					...state.operations,
					{
						funds: action.payload.funds,
						operationType: action.operationType,
						operationDate: action.operationDate,
						id: action.id,
						category: action.payload.category
					}
				]
			};
		}
		case BalanceAction.WITHDRAW_CREDITS: {
			return {
				...state,
				balance: state.balance - action.payload,
				operations: [
					...state.operations,
					{
						funds: action.payload,
						operationType: action.operationType,
						operationDate: action.operationDate,
						id: action.id
					}
				]
			};
		}

		default: {
			return state;
		}
	}
}
