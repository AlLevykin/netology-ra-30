import { createStore, combineReducers, applyMiddleware } from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceReducer from '../reducers/serviceReducer';
import serviceFilterReducer from '../reducers/serviceFilterReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  service: serviceReducer,
  serviceFilter: serviceFilterReducer
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
