import {postApi,getApi} from "../../utils/userApi"
import store from '../store'
const LOAD_OFFER_REQUEST = 'LOAD_OFFER_REQUEST'
const LOAD_OFFER_SUCCESS = 'LOAD_OFFER_SUCCESS'
const LOAD_OFFER_FAILURE = 'LOAD_OFFER_FAILURE'
export async function requestOffer(data) {
    loadAuthLoading(true)
    const url = '/user/offers'
    const response = await getApi(url)
    loadAuthLoading(false)
    if (response.error) {
        loadAuthFailure(response.error)
        return
    }
    loadAuthSuccess(response.offers)
}
const loadAuthLoading = (isLoading) => {
    store.dispatch({
        type: LOAD_OFFER_REQUEST,
        isLoading
    })
}
const loadAuthFailure = (error) => {
    store.dispatch({
        type: LOAD_OFFER_FAILURE,
        error
    })
}
const loadAuthSuccess = (offers) => {
    store.dispatch({
        type: LOAD_OFFER_SUCCESS,
        offers
    })
}