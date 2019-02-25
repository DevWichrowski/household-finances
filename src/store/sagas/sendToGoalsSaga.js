import { put } from 'redux-saga/effects';

export function* sendToGoalSaga(action) {
	try {
		const payload = action.payload;

		yield put({ type: '[Goals] - SEND_TO_GOAL_SUCCESS', payload });
	} catch (err) {
		console.log(err);
	}
}
