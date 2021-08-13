import {
    DETAILS_REQUEST,
    DETAILS_FAILURE,
    DETAILS_SUCCESS
}
    from '../actions/actionTypes';

const initialState = { details: null, loading: false, error: null };

export default function detailsReducer(state = initialState, action) {
    switch (action.type) {
        case DETAILS_REQUEST:
            return { ...initialState, loading: true, error: null };
        case DETAILS_FAILURE:
            const { error } = action.payload;
            return { ...initialState, loading: false, error };
        case DETAILS_SUCCESS:
            const { details } = action.payload;
            return { details, loading: false, error: null };
        default:
            return state;
    }
}