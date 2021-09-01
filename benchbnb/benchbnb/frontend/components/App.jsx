import React from 'react';
import GreetingContainer from './greeting_container';
import {Route} from 'react-router-dom';
import SignupFormContainer from './signup_form_container';
import LoginFormContainer from './login_form_container'

const App = () => {
    return (
        <div>
            <header>
                <h2>Bench BnB</h2>
                <GreetingContainer />
            </header>

            <Route path='/login' component={LoginFormContainer}/>
            <Route path="/signup" component={SignupFormContainer}/>
        </div>
    )
}

export default App;