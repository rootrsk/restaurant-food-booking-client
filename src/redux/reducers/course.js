const LOAD_COURSE_REQUEST = 'LOAD_COURSE_REQUEST'
const LOAD_COURSE_SUCCESS = 'LOAD_COURSE_SUCCESS'
const LOAD_COURSE_FAILURE = 'LOAD_COURSE_FAILURE'

const initialState = {
    courses:[],
    isFetching: false,
}

const course =  (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COURSE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case LOAD_COURSE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                courses: action.courses,
                error: ''
            })
        case LOAD_COURSE_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                courses:[],
                error: action.error
            })
        default:
            return state
    }
}

export default course