import { take, put, spawn } from 'redux-saga/effects';
import { searchSkillsRequest } from '../actions';
import { CHANGE_SEARCH_FIELD } from '../actions/actionTypes';

function* changeSearchSaga() {
    while (true) {
        const action = yield take(CHANGE_SEARCH_FIELD);
        yield put(searchSkillsRequest(action.payload.search));
    }
}

export default function* saga() { yield spawn(changeSearchSaga); }