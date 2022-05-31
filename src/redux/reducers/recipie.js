const LOAD_RECIPIE_REQUEST = 'LOAD_RECIPIE_REQUEST'
const LOAD_RECIPIE_SUCCESS = 'LOAD_RECIPIE_SUCCESS'
const LOAD_RECIPIE_FAILURE = 'LOAD_RECIPIE_FAILURE'

const initialState = {
    recipies:[],
    isFetching: false,
}

const recipies = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_RECIPIE_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case LOAD_RECIPIE_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                recipies:action.recipies,
                error: ''
            })
        case LOAD_RECIPIE_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            })
        default:
            return state
    }
}

export default recipies