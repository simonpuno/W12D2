export const signup = (user) => (
    $.ajax({
        url: '/api/users',
        method: 'POST',
        data: {user: user}
    })
)

export const login = (user) => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {user: user}
    })
)

export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
)