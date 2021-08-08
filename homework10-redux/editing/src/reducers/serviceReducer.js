import {
  CHANGE_SERVICE_FIELD,
  EDIT_SERVICE,
  CLEAR_SERVICE_FORM
} from '../actions/actionTypes';

const initialState = {
  id: '',
  name: '',
  price: 0.0
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload;
      return { ...state, [name]: value };
    case EDIT_SERVICE:
      return { ...action.payload };
    case CLEAR_SERVICE_FORM:
      return initialState;
    default:
      return state;
  }
};

export default serviceReducer;
