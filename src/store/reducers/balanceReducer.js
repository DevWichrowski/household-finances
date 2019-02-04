import * as BalanceAction from '../actions/balanceAction';

const initialState = {
    balance: 21000,
};

export function balanceReducer(state = initialState, action) {
    switch (action.type) {

        case BalanceAction.GET_BALANCE: {
            return {...state}
        }
        default: {
            return state;
        }
    }
}