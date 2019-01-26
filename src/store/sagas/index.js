import { takeLatest } from 'redux-saga/effects';


function* actionWatcher() {

    yield takeLatest('[personalInfoAction] - SUCCESS_POSTS', /*GETAPIHERE */);
}


export default function* rootSaga() {
    yield ( actionWatcher() );
}
