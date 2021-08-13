import { put, retry, takeLatest } from 'redux-saga/effects';
import { DETAILS_REQUEST } from '../actions/actionTypes';
import { detailsSuccess, detailsFailure } from '../actions';

const getDetails = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_URL}/${id}`);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return await response.json();
}

function* handleDetailsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1000;
        const details = yield retry(
            retryCount, retryDelay, getDetails, action.payload
        );
        yield put(detailsSuccess(details));
    } catch (e) {
        yield put(detailsFailure(e.message));
    }
}

export function* watchDetailsSaga() {
    yield takeLatest(DETAILS_REQUEST, handleDetailsSaga);
}