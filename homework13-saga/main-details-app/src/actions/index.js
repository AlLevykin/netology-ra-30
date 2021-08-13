import {
    SERVICES_REQUEST,
    SERVICES_FAILURE,
    SERVICES_SUCCESS,
    DETAILS_REQUEST,
    DETAILS_FAILURE,
    DETAILS_SUCCESS,    
}
    from './actionTypes';

export const servicesRequest = () => (
    { type: SERVICES_REQUEST, payload: null }
);

export const servicesFailure = error => (
    { type: SERVICES_FAILURE, payload: { error } }
);

export const servicesSuccess = services => (
    { type: SERVICES_SUCCESS, payload: { services } }
);

export const detailsRequest = (id) => (
    { type: DETAILS_REQUEST, payload: id }
);

export const detailsFailure = error => (
    { type: DETAILS_FAILURE, payload: { error } }
);

export const detailsSuccess = details => (
    { type: DETAILS_SUCCESS, payload: { details } }
);