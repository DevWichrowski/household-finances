import { createSelector } from 'reselect';

const selectGoals = state => state.goalsInfo;

export const getGoalsSelector= createSelector(
    selectGoals,
    state => state.goals
 );

 export const getTransferTotalCount= createSelector(
    selectGoals,
    state => state.transferCount
 );