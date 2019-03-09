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

 export const getTransferTotalCountTitles= createSelector(
    selectGoals,
    state => state.transferCount.map(item => item.goalTitle)
 );