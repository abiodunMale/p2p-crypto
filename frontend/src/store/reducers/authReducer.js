import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../actionTypes";

const initialState = {
    loading: false,
    message: {}
};

const registerReducer = (state = initialState , action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {
                ...state, loading: true
            }
        case USER_REGISTER_SUCCESS: 
            return {
                ...state,
                loading: false,
                message: {
                    type: 'success',
                    content: action.payload.message
                }
            }
        case USER_REGISTER_FAIL: 
            return {
                ...state,
                loading: false,
                message: {
                    type: 'fail',
                    content: action.payload
                }
            }
        default:
            return state;
    }
};


export { registerReducer };