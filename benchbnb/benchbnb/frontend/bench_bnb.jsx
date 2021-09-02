import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
// import * as SessionUtil from './util/session_api_util'
import { fetchBenches } from './actions/bench_actions';
import {loginUser, logoutUser, signupUser} from './actions/session_actions'
import {fetchBenchesUtil} from './util/bench_api_util'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    // const store = configureStore();

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    window.getState = store.getState
    window.dispatch = store.dispatch
    window.fetchBenches = fetchBenches
    window.fetchBenchesUtil = fetchBenchesUtil
    // window.loginUser = loginUser
    // window.logoutUser = logoutUser
    // window.signupUser = signupUser

    ReactDOM.render(<Root store={store}/>, root);
})