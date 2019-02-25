import { takeLatest } from 'redux-saga/effects';
import { sendToGoalSaga } from './sendToGoalsSaga';


function* actionWatcher() {
    yield takeLatest('[Balance] TRANSFER_TO_GOAL', sendToGoalSaga);
}


export default function* rootSaga() {
    yield ( actionWatcher() );
}
