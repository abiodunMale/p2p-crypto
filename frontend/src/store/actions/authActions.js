import axios from 'axios';
import {  
    USER_REGISTER_FAIL, 
    USER_REGISTER_REQUEST, 
    USER_REGISTER_SUCCESS, 
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT_REQUEST, 
    USER_LOGOUT_SUCCESS, 
    USER_LOGOUT_FAIL 
} from '../actionTypes';
import { toast } from "react-toastify";

const registerAction = (user) => {
    return async dispatch => {
        try {

            dispatch({
                type: USER_REGISTER_REQUEST
            });


            const config = {
                headers: {
                    'Content-Type': 'application/json'
                }
            };

            const { data } = await axios.post('api/auth/register', user, config);

            dispatch({
                type: USER_REGISTER_SUCCESS,
                payload: data
            })
            
        } catch (error) {
            dispatch({
                type: USER_REGISTER_FAIL,
                payload: error.response && error.response.data.message
            });
        }
    };
};

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

            const {data} =  await axios.post('api/auth/login', loginData, config);

            dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data,
            });

            // Save the user into local storage
            localStorage.setItem('userAuthData', JSON.stringify(data.user.token))
        } 
        catch (error) {
            toast.error("hhugugu");

            dispatch({
                type: USER_LOGIN_FAIL,
                payload: error.response && error.response.data.message,
            });
        }
    };
};

const logoutUserAction = () => {
    return async (dispatch) => {
        try {
            
            dispatch({
                type: USER_LOGOUT_REQUEST
            });

            // Remove the user auth from local storage
            localStorage.removeItem('userAuthData');

            dispatch({
                type: USER_LOGOUT_SUCCESS
            });

        } catch (error) {
            dispatch({
                type: USER_LOGOUT_FAIL
            });
        }
    };
};

export {loginUserAction, logoutUserAction, registerAction};
