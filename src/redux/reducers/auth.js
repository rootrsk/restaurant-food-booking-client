const LOAD_AUTH_REQUEST = 'LOAD_AUTH_REQUEST'
const LOAD_AUTH_SUCCESS = 'LOAD_AUTH_SUCCESS'
const LOAD_AUTH_FAILURE = 'LOAD_AUTH_FAILURE'

const initialState = {
    authenticated: false,
    user: null,
    token:null,
    isFetching: false,
    authenticated_as:''
}

const auth = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case LOAD_AUTH_REQUEST:
            return Object.assign({},state,{
                isFetching: true,
            })
        case LOAD_AUTH_SUCCESS:
            return Object.assign({},state,{
                isFetching: false,
                success: true,
                authenticated: true,
                token: action.token,
                user: action.user,
                authenticated_as:action.authenticated,
                error:''
            })
        case LOAD_AUTH_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                success: false,
                error:action.error,
                authenticated: false,
                user:null
            })
        default:
            return state
    }
}
export default auth