const LOAD_QUIZ_REQUEST = 'LOAD_QUIZ_REQUEST'
const LOAD_QUIZ_SUCCESS = 'LOAD_QUIZ_SUCCESS'
const LOAD_QUIZ_FAILURE = 'LOAD_QUIZ_FAILURE'

const initialState = {
    quizes: [],
    isFetching: false,
}

const quiz =  (state = initialState, action) => {
    switch (action.type) {
        case LOAD_QUIZ_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case LOAD_QUIZ_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                quizes: action.quizes,
                error: ''
            })
        case LOAD_QUIZ_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                quizes: [],
                error: action.error
            })
        default:
            return state
    }
}

export default quiz