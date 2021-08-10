import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  SAVE_SERVICE,
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,
  API_SERVICE_REQUEST
} from '../actions/actionTypes';
import { Status } from '../actions/actionStatuses';

const initialState = {items: [], status: null, errorText: ''};

const serviceListReduser = (state = initialState, action) => {

  let id, name, price;

  switch (action.type) {
    case API_SERVICE_REQUEST:
      id = action.payload;
      return {...state, items: state.items.map(service => service.id === id ? {...service, pending: true } : service)};
    case FETCH_SERVICE_FAILURE:
      return {items: [], status: Status.ERROR, errorText: action.payload};
    case FETCH_SERVICE_SUCCESS:
      return {items: [...action.payload], status: Status.SUCCESS, errorText: ''};
    case FETCH_SERVICE_REQUEST:
      return {...state, status: Status.PENDING, errorText: ''};
    case ADD_SERVICE:
      ({ name, price } = action.payload);
      return {...state, items: [...state.items, { id: nanoid(), name: name, price: Number(price) }]};
    case REMOVE_SERVICE:
      ({ id } = action.payload);
      return {...state, items: state.items.filter(service => service.id !== id)};
    case SAVE_SERVICE:
      ({ id, name, price } = action.payload);
      return {...state, items: state.items.map(service => service.id === id ? {id, name, price} : service)};
    default:
      return state;
  }
};

export default serviceListReduser;
