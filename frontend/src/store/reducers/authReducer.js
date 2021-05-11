import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT_REQUEST, USER_LOGOUT_SUCCESS, USER_LOGOUT_FAIL } from "../actionTypes";

const loginUserReducer = (state= {}, action) => {

    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
            };
        case USER_LOGIN_SUCCESS:
            return {
                token: action.payload.user.token,
                userInfo: action.payload.user,
            };
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    content: action.payload
                }, 
                // we are already using toastify in the action, so no need to pass meaage to the state any more
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
                    title: 'Error',
                    content: 'Error While Logging Out'
                },
            };
        default:
            return state;
    }
};

export {loginUserReducer};