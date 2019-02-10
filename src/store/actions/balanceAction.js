export const ADD_CREDITS = '[Balance] - ADD CREDITS';
export const WITHDRAW_CREDITS = '[Balance] - WITHDRAW CREDITS';

export const addCredits = (payload) => ({
    type: ADD_CREDITS,
    operationType: 'add',
    operationDate: new Date(),
    payload
});

export const withdrawCredits = (payload) => ({
    type: WITHDRAW_CREDITS,
    operationType: 'withdraw',
    operationDate: new Date(),
    payload
});