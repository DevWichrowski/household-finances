import { createSelector } from 'reselect';

const selectBalance = state => state.balanceInfo;

export const getBalanceSelector = createSelector(
   selectBalance,
   state => state.balance
);
