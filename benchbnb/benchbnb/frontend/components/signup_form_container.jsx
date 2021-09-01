import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signupUser } from '../actions/session_actions';

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'signup'
});

const mDTP = (dispatch, ownProps) => ({
    processForm: user => dispatch(signupUser(user))
});

export default connect(mSTP, mDTP)(SessionForm);