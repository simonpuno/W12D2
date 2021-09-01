import React from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type){
        return e => this.setState({[type]: e.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/'))
    }

    render(){
        let errors = null;
        if (this.props.errors) {
                errors = this.props.errors.map((err, idx) => (
                    <li key={idx}>{err}</li>
                ))
        }

        const link = this.props.formType === 'login' ? (
            <Link to='/signup'>Sign Up</Link>
        ) : (
            <Link to='/login'>Log In</Link>
        )

        return (
            <div>
                <h2>{this.props.formType}</h2>
                <ul>{errors}</ul>
                    <form onSubmit={this.handleSubmit}>
                        <label>Username:
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.handleChange('username')}
                            />
                        </label>
                        <label>Password:
                            <input 
                                type="text"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                            />
                        </label>
                        <button type="submit">{this.props.formType}</button>
                    </form>
                <p>{link}</p>
            </div>
        )
    }
}

export default SessionForm;