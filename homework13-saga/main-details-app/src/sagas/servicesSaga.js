import { put, retry, takeLatest } from 'redux-saga/effects';
import { SERVICES_REQUEST } from '../actions/actionTypes';
import { servicesSuccess, servicesFailure } from '../actions';

const getServices = async () => {
    const response = await fetch(process.env.REACT_APP_URL);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

function* handleServicesSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1000;
        const services = yield retry(
            retryCount, retryDelay, getServices, action.payload
        );
        yield put(servicesSuccess(services));
    } catch (e) {
        yield put(servicesFailure(e.message));
    }
}

export function* watchServicesSaga() {
    yield takeLatest(SERVICES_REQUEST, handleServicesSaga);
}