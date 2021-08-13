import { spawn } from 'redux-saga/effects';
import { watchServicesSaga } from './servicesSaga';
import { watchDetailsSaga } from './detailsSaga';

export default function* rootSaga() {
    yield spawn(watchServicesSaga);
    yield spawn(watchDetailsSaga);    
}