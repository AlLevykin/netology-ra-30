import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import detailsReducer from '../reducers/detailsReducer';
import servicesReducer from '../reducers/servicesReducer';

import rootSaga from '../sagas';

const reducer = combineReducers({ services: servicesReducer, details: detailsReducer });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
