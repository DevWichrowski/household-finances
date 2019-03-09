import * as BalanceAction from '../actions/balanceAction';

const initialState = {
	balance: 5000,
	operations: [
		{
			id: '_asd123eas',
			funds: 5000,
			operationType: 'addOperation',
			operationDate: '10-02-2019, 17:35',
			category: 'Wynagrodzenie'
		}
	],
	addCategories: [ 'Wynagrodzenie', 'Oddany dług', 'Prezent', 'Sprzedaż', 'Bez kategorii' ],
	withdrawCategories: [ 'Rachunki', 'Rozrywka', 'Zakupy', 'Naprawa', 'Bez kategorii' ],
	addCategoriesCount: [
		{ category: 'Wynagrodzenie', totalFunds: 5000 },
		{ category: 'Oddany dług', totalFunds: 0 },
		{ category: 'Prezent', totalFunds: 0 },
		{ category: 'Sprzedaż', totalFunds: 0 },
		{ category: 'Bez kategorii', totalFunds: 0 }
	],
	withdrawCategoriesCount: [
		{ category: 'Rachunki', totalFunds: 0 },
		{ category: 'Rozrywka', totalFunds: 0 },
		{ category: 'Zakupy', totalFunds: 0 },
		{ category: 'Naprawa', totalFunds: 0 },
		{ category: 'Bez kategorii', totalFunds: 0 }
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
