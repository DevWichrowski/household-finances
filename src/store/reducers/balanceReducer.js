import * as BalanceAction from '../actions/balanceAction';

const initialState = {
	balance: 0,
	operations: [
	],
	addCategories: [ 'Salary', 'Return of debt', 'Gift', 'Sale', 'No  category' ],
	withdrawCategories: [ 'Bills', 'Entertainment', 'Shopping', 'Repair', 'No category' ],
	addCategoriesCount: [
		{ category: 'Salary', totalFunds: 0 },
		{ category: 'Return of debt', totalFunds: 0 },
		{ category: 'Gift', totalFunds: 0 },
		{ category: 'Sale', totalFunds: 0 },
		{ category: 'No  category', totalFunds: 0 }
	],
	withdrawCategoriesCount: [
		{ category: 'Bills', totalFunds: 0 },
		{ category: 'Entertainment', totalFunds: 0 },
		{ category: 'Shopping', totalFunds: 0 },
		{ category: 'Repair', totalFunds: 0 },
		{ category: 'No  category', totalFunds: 0 }
	],
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
				],
				addCategoriesCount: state.addCategoriesCount.map(
					(item) =>
						item.category === action.payload.category
							? {
									...item,
									totalFunds: item.totalFunds + action.payload.funds,
									category: action.payload.category
								}
							: item
				)
			};
		}
		case BalanceAction.WITHDRAW_CREDITS: {
			return {
				...state,
				balance: state.balance - action.payload.funds,
				operations: [
					...state.operations,
					{
						funds: action.payload.funds,
						operationType: action.operationType,
						operationDate: action.operationDate,
						id: action.id,
						category: action.payload.category
					}
				],
				withdrawCategoriesCount: state.withdrawCategoriesCount.map(
					(item) =>
						item.category === action.payload.category
							? {
									...item,
									totalFunds: item.totalFunds + action.payload.funds,
									category: action.payload.category
								}
							: item
				)
			};
		}
		case BalanceAction.NEW_ADD_CATEGORY: {
			return {
				...state,
				addCategories: [ ...state.addCategories, action.payload ],
				addCategoriesCount: [ ...state.addCategoriesCount, { category: action.payload, totalFunds: 0 } ]
			};
		}
		case BalanceAction.NEW_WITHDRAW_CATAGORY: {
			return {
				...state,
				withdrawCategories: [ ...state.withdrawCategories, action.payload ],
				withdrawCategoriesCount: [
					...state.withdrawCategoriesCount,
					{ category: action.payload, totalFunds: 0 }
				]
			};
		}
		case BalanceAction.TRANSFER_TO_GOAL: {
			return {
				...state,
				balance: state.balance - action.payload.funds,
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
		default: {
			return state;
		}
	}
}
