import {signup, login, logout} from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS'

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user: user 
})

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
})

const receiveErrors = (errors) => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors   // array
})

// export const loginUser = (user) => (dispatch) => (
//     login(user)
//         .then(user => dispatch(receiveCurrentUser(user)))
//         .catch(errors => dispatch(receiveErrors(errors)))
// )
export const loginUser = (user) => (dispatch) => (
    login(user)
        .then(user => dispatch(receiveCurrentUser(user))) 
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const logoutUser = () => (dispatch) => (
    logout()
        .then(() => dispatch(logoutCurrentUser()))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)

export const signupUser = (user) => (dispatch) => (
    signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .fail(errors => dispatch(receiveErrors(errors.responseJSON)))
)
