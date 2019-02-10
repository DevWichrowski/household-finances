import moment from 'moment'

const currentDate = moment(new Date()).format('DD-MM-YYYY, H:mm');

export const ADD_CREDITS = '[Balance] - ADD CREDITS';
export const WITHDRAW_CREDITS = '[Balance] - WITHDRAW CREDITS';

export const addCredits = (payload) => ({
    type: ADD_CREDITS,
    operationType: 'addOperation',
    operationDate: currentDate,
    payload
});

export const withdrawCredits = (payload) => ({
    type: WITHDRAW_CREDITS,
    operationType: 'withdrawOperation',
    operationDate: currentDate,
    payload
});