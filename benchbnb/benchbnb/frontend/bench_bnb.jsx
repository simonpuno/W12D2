import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import * as SessionUtil from './util/session_api_util'
import {loginUser, logoutUser, signupUser} from './actions/session_actions'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    window.getState = store.getState
    window.dispatch = store.dispatch 
    window.loginUser = loginUser
    window.logoutUser = logoutUser
    window.signupUser = signupUser
    

    ReactDOM.render(<Root store={store}/>, root);
})