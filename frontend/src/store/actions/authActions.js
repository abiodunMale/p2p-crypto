import axios from 'axios';
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS } from '../actionTypes';

const loginUserAction = (loginData) => {
    return async (dispatch) => {
        try {
            dispatch({
                type: USER_LOGIN_REQUEST
            });

            // Make actual call
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} =  await axios.post('/api/auth/login', loginData, config);

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

            // Save the user into local storage
            localStorage.setItem('userAuthData', JSON.stringify(data.user.token))
        } 
        catch (error) {
            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
};

export {loginUserAction};
