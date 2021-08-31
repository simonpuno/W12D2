import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import * as SessionUtil from './util/session_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore();

    window.getState = store.getState
    window.dispatch = store.dispatch 
    window.signup = SessionUtil.signup
    window.login = SessionUtil.login
    window.logout = SessionUtil.logout

    ReactDOM.render(<h1>Hello world</h1>, root);
})