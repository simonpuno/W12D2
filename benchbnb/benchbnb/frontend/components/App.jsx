import React from 'react';
import GreetingContainer from './greeting_container';
import {Route} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container'
import { AuthRoute } from '../util/route_util';
import BenchIndexContainer from './bench_index_container';
import SearchContainer from './search_container';

const App = () => {
    return (
        <div>
            <header>
                <h2>Bench BnB</h2>
                <GreetingContainer />
            </header>

            <AuthRoute path='/login' component={LoginFormContainer}/>
            <AuthRoute path="/signup" component={SignupFormContainer}/>
            <Route exact path='/' component={SearchContainer}/>
        </div>
    )
}

export default App;