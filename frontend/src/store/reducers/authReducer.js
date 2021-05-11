import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL } from "../actionTypes";

const initialState = {
    loading: false,
    message: {},
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

const loginUserReducer = (state= {}, action) => {

    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
            };
        case USER_LOGIN_SUCCESS:
            return {
                token: action.payload.user.token,
                userInfo: action.payload.user
            };
        case USER_LOGIN_FAIL:
            return {
                message: {
                    type: 'fail',
                    content: action.payload
                }
            };
        case USER_LOGOUT_REQUEST:
            return {
                loading: true,
            };
        case USER_LOGOUT_SUCCESS:
            return {
            };
        case USER_LOGOUT_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    content: 'Error While Logging Out'
                }
            };
        default:
            return state;
    }
};

export {loginUserReducer, registerReducer};