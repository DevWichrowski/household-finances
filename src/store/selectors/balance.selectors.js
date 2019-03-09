import { createSelector } from 'reselect';

const selectBalance = state => state.balanceInfo;

export const getBalanceSelector = createSelector(
   selectBalance,
   state => state.balance
);

export const getOperationsSelector = createSelector(
   selectBalance,
   state => state.operations
);

export const getAddCategoriesSelector = createSelector (
   selectBalance,
   state => state.addCategories
);

export const getWithdrawSelector = createSelector (
   selectBalance,
   state => state.withdrawCategories
);

export const getAddCategoriesCout = createSelector (
   selectBalance,
   state => state.addCategoriesCount
);

export const getWithdrawCategoriesCout = createSelector (
   selectBalance,
   state => state.withdrawCategoriesCount
);
