import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  SAVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  CLEAR_SERVICE_FORM,
  FILTER_SERVICE_LIST,
  FETCH_SERVICE_REQUEST,
  FETCH_SERVICE_SUCCESS
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
  return { type: FETCH_SERVICE_REQUEST, payload: null};
}

export const fetchServicesSuccess = (data) => {
  return { type: FETCH_SERVICE_SUCCESS, payload: data }
}

export const fetchServices = async dispatch => 
{ 
  dispatch(fetchServicesRequest());
  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);
    if(!response.ok) { 
      //throw newError(response.statusText); 
    }
    const data=await response.json();
    dispatch(fetchServicesSuccess(data));
  } 
  catch(e) {
    //dispatch(fetchServicesFailure(e.message));
  }}