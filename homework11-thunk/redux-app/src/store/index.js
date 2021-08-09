import { createStore, combineReducers } from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceReducer from '../reducers/serviceReducer';
import serviceFilterReducer from '../reducers/serviceFilterReducer';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  service: serviceReducer,
  serviceFilter: serviceFilterReducer
});

const store = createStore(reducer);

export default store;
