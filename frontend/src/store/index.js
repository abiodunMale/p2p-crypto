import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loginUserReducer,  registerReducer } from './reducers/authReducer';


const middleware = [thunk];

const reducer = combineReducers({
    userAuth: loginUserReducer,
    userRegister: registerReducer
});

// Get user from localstorage and save it into our store
const userAuthFromStorage = localStorage.getItem('userAuthData') ? JSON.parse(localStorage.getItem('userAuthData')) : null;

const initialState = {
    userAuth: { token: userAuthFromStorage },
}

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export { store };