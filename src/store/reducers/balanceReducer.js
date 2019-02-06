import * as BalanceAction from '../actions/balanceAction';

const initialState = {
    balance: 21000,
};

export function balanceReducer(state = initialState, action) {
    switch (action.type) {

        case BalanceAction.ADD_CREDITS: {
            return {...state, balance: state.balance + action.payload}
        }
        case BalanceAction.WITHDRAW_CREDITS: {
            return {...state, balance: state.balance - action.payload}
        }

        default: {
            return state;
        }
    }
}