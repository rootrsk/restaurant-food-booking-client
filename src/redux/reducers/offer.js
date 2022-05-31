const LOAD_OFFER_REQUEST = 'LOAD_OFFER_REQUEST'
const LOAD_OFFER_SUCCESS = 'LOAD_OFFER_SUCCESS'
const LOAD_OFFER_FAILURE = 'LOAD_OFFER_FAILURE'

const initialState = {
    offers: [],
    isFetching: false
}

const offer = (state = initialState, action) => {
    // console.log(action)
    switch (action.type) {
        case LOAD_OFFER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
            })
        case LOAD_OFFER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                success: true,
                offers: action.offers,
                error: ''
            })
        case LOAD_OFFER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                success: false,
                error: action.error,
            })
        default:
            return state
    }
}
export default offer