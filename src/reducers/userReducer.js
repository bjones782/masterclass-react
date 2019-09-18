const initialState = {
    user: "",
    loggedInStatus: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USER': {
            return {...state, 
                user: action.data.user, loggedInStatus: true}
        }
        case 'LOGIN': {
            return { ...state, loggedInStatus: true }
            
        }
        case 'LOGOUT': {
            window.localStorage.clear()
            return { ...state, loggedInStatus: false }
        }
        default: {
            return state
        }
    }
}