import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form'

import appReducer from './appReducer'
import profileReducer from './profileReducer';
import myProfileReducer from './myProfileReducer';
import dialogsReducer from './dialogsReducer';
import usersReduser from './usersReducer';
import authReducer from './authReducer'

let reducers = combineReducers ({
    form: formReducer,
    app: appReducer,
    auth: authReducer,
    profilePage: profileReducer,
    myProfile: myProfileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReduser,
})

let store = createStore (reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;