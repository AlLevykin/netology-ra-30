import { take, put, spawn, fork, race, delay, retry, takeLatest } from 'redux-saga/effects';
import { searchSkillsRequest, searchSkillsFailure, searchSkillsSuccess } from '../actions';
import { searchSkills } from '../api';
import { CHANGE_SEARCH_FIELD, SEARCH_SKILLS_REQUEST } from '../actions/actionTypes';

const debounce = (ms, pattern, task, ...args) => fork(function* () {
    while (true) {
        let action = yield take(pattern);
        while (true) {
            // race - "аналог" Promise.race
            // в ответ получаем объект с полем первого завершившегося эффекта
            const { debounced, latestAction } = yield race({
                debounced: delay(ms),
                latestAction: take(pattern),
            });
            if (debounced) {
                // fork - non-blocking вызов для выполнения действий
                yield fork(task, ...args, action);
                break;
            }
            action = latestAction;
        }
    }
});

function *debouncedChangeSearchSaga(action) {
    yield put(searchSkillsRequest(action.payload));
    }

    function filterChangeSearchAction({ type, payload }) {
    return type === CHANGE_SEARCH_FIELD && payload.search.trim() !== ''
}

// watcher
function* watchdeDouncedChangeSearchSaga() {
    yield debounce(100, filterChangeSearchAction, debouncedChangeSearchSaga);
}

// watcher
function* watchChangeSearchSaga() {
    while (true) {
        const action = yield take(filterChangeSearchAction);
        yield put(searchSkillsRequest(action.payload.search));
    }
}

// worker
function* handleSearchSkillsSaga(action) {
    try {
        const retryCount = 3;
        const retryDelay = 1000; // in ms
        const data = yield retry(
            retryCount, retryDelay, searchSkills, action.payload.search
        );
        yield put(searchSkillsSuccess(data));
    } catch (e) {
        yield put(searchSkillsFailure(e.message));
    }
}

// watcher
function* watchSearchSkillsSaga() {
    yield takeLatest(SEARCH_SKILLS_REQUEST, handleSearchSkillsSaga);
}

export default function* saga() {
    //yield spawn(watchdeDouncedChangeSearchSaga);    
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchSkillsSaga)
}
