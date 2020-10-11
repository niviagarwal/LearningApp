const userlogin = (userObj) => {
    return {
        type: "LOGIN",
        payload: userObj
    }
}

const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export default {
    userlogin,
    logout
}