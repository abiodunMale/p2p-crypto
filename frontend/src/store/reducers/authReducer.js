import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from "../actionTypes";

const loginUserReducer = (state= {}, action) => {

    switch(action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
            };
        case USER_LOGIN_SUCCESS:
            return {
                token: action.payload.user.token,
                // userInfo: action.payload.user,
            };
        case USER_LOGIN_FAIL:
            return {
                loading: false,
                message: {
                    type: 'fail',
                    title: 'Error',
                    content: action.payload
                },
            };
        default:
            return state;
    }
};

export {loginUserReducer};