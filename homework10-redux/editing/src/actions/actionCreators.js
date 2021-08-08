import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  SAVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  CLEAR_SERVICE_FORM,
  FILTER_SERVICE_LIST
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
