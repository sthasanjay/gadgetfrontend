import {combineReducers} from 'redux';
import loggedInReducer from './loggedIn';

export default combineReducers({
    status:loggedInReducer,
})