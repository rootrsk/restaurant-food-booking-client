const LOAD_DASHBOARD_REQUEST = 'LOAD_DASHBOARD_REQUEST'
const LOAD_DASHBOARD_SUCCESS = 'LOAD_DASHBOARD_SUCCESS'
const LOAD_DASHBOARD_FAILURE = 'LOAD_DASHBOARD_FAILURE'

const initialState = {
    isFetching: false,
}

const course = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_DASHBOARD_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case LOAD_DASHBOARD_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                ...action.data,
                error: ''
            })
        case LOAD_DASHBOARD_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            })
        default:
            return state
    }
}

export default course