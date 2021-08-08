import { nanoid } from 'nanoid';
import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  SAVE_SERVICE
} from '../actions/actionTypes';

const initialState = [
  {
    id: nanoid(),
    name: 'Замена стекла',
    price: 22.5
  },
  {
    id: nanoid(),
    name: 'Замена материнской платы',
    price: 159.99
  }
];

const serviceListReduser = (state = initialState, action) => {

  let id, name, price;

  switch (action.type) {
    case ADD_SERVICE:
      ({ name, price } = action.payload);
      return [...state, { id: nanoid(), name: name, price: Number(price) }];
    case REMOVE_SERVICE:
      ({ id } = action.payload);
      return state.filter(service => service.id !== id);
    case SAVE_SERVICE:
      ({ id, name, price } = action.payload);
      return state.map(service => service.id === id ? {id, name, price} : service);
    default:
      return state;
  }
};

export default serviceListReduser;
