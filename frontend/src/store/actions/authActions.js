import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../actionTypes";
import axios from 'axios';

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


export { registerAction };