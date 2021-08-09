import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  SAVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  CLEAR_SERVICE_FORM,
  FILTER_SERVICE_LIST,
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS,
  FETCH_SERVICE_FAILURE,
  API_SERVICE_REQUEST
} from '../actions/actionTypes';

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } };
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } };
}

export function editService(id, name, price) {
  return { type: EDIT_SERVICE, payload: { id, name, price } };
}

export function saveService(id, name, price) {
  return { type: SAVE_SERVICE, payload: { id, name, price } };
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } };
}

export function clearServiceForm() {
  return { type: CLEAR_SERVICE_FORM, payload: null };
}

export function filterServiceList(filter) {
  return { type: FILTER_SERVICE_LIST, payload: filter };
}

export const fetchServicesRequest = () => {
  return { type: FETCH_SERVICE_REQUEST, payload: null };
}

export const fetchServicesSuccess = (data) => {
  return { type: FETCH_SERVICE_SUCCESS, payload: data }
}

export const fetchServicesFailure = (errorText) => {
  return { type: FETCH_SERVICE_FAILURE, payload: errorText }
}

export function apiServiceRequest(id) {
  return { type: API_SERVICE_REQUEST, payload: id };
}

export const fetchServices = async dispatch => {
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    dispatch(fetchServicesSuccess(data));
  }
  catch (e) {
    dispatch(fetchServicesFailure(e.message));
  }
}

export const fetchForRemoving = async (id, dispatch) => {
  dispatch(apiServiceRequest(id));
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    dispatch(removeService(id));
  }
  catch (e) {
    fetchServices(dispatch);
  }
}

export const fetchForPosting = async (id, name, price, dispatch) => {
  dispatch(apiServiceRequest(id));
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`, 
    { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({id, name, price})
    });
    if (!response.ok) {
        throw new Error(response.statusText); 
    }
    if (id === 0) {
      dispatch(addService(name, price));
    } else {
      dispatch(editService(id, name, price));
    }
  } 
  catch (e) { 
    fetchServices(dispatch); 
  }
}
