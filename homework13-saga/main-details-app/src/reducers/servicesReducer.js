import {
    SERVICES_REQUEST,
    SERVICES_FAILURE,
    SERVICES_SUCCESS
}
    from '../actions/actionTypes';

const initialState = { items: [], loading: false, error: null };

export default function servicesReducer(state = initialState, action) {
    switch (action.type) {
        case SERVICES_REQUEST:
            return { ...state, items: [], loading: true, error: null };
        case SERVICES_FAILURE:
            const { error } = action.payload;
            return { ...state, items: [], loading: false, error };
        case SERVICES_SUCCESS:
            const { services } = action.payload;
            return { ...state, items: services, loading: false, error: null };
        default:
            return state;
    }
}