const LOAD_NOTIFICATION_REQUEST = 'LOAD_NOTIFICATION_REQUEST'
const LOAD_NOTIFICATION_SUCCESS = 'LOAD_NOTIFICATION_SUCCESS'
const LOAD_NOTIFICATION_FAILURE = 'LOAD_NOTIFICATION_FAILURE'

const initialState = {
    notifications:[],
    isFetching: false
}

const notification =  (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case LOAD_NOTIFICATION_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case LOAD_NOTIFICATION_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                success: true,
                notifications: action.notifications,
                error: ''
            })
        case LOAD_NOTIFICATION_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                success: false,
                error: action.error,
            })
        default:
            return state
    }
}

export default notification