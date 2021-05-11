import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { registerReducer } from './reducers/authReducer';


const middleware = [thunk];

const reducer = combineReducers({
    userRegister: registerReducer
});


const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export { store };