import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  SAVE_SERVICE,
  FETCH_SERVICE_REQUEST
} from '../actions/actionTypes';
import { Status } from '../actions/actionStatuses';

const initialState = {items: [], status: null, errorText: ''};

const serviceListReduser = (state = initialState, action) => {

  let id, name, price;

  switch (action.type) {
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
      return {...state, items: state.map(service => service.id === id ? {id, name, price} : service)};
    default:
      return state;
  }
};

export default serviceListReduser;
