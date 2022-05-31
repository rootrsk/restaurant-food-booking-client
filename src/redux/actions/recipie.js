import {postApi,getApi} from "../../utils/adminApi"
import store from '../store'
const LOAD_RECIPIE_REQUEST = 'LOAD_RECIPIE_REQUEST'
const LOAD_RECIPIE_SUCCESS = 'LOAD_RECIPIE_SUCCESS'
const LOAD_RECIPIE_FAILURE = 'LOAD_RECIPIE_FAILURE'
export async function fetchRecipie() {
    setLoading(true)
    const {error,data} = await getApi('/recipie')
    setLoading(false)
    if (error) {
        console.log(error)
        loadFetchFailuare(error)
        return
    }
    loadFetchSuccess(data.recipies)
}
/**
 * 
 * @param {array} recipies array of recipies
 */
export async function updateRecipies(recipies){
    if(!recipies)return
    store.dispatch({
        type: LOAD_RECIPIE_SUCCESS,
        recipies
    })
}
const setLoading = (isLoading) => {
    store.dispatch({
        type: LOAD_RECIPIE_REQUEST,
        isLoading
    })
}
const loadFetchFailuare = (error) => {
    store.dispatch({
        type: LOAD_RECIPIE_FAILURE,
        error
    })
}
const loadFetchSuccess = (recipies) => {
    store.dispatch({
        type: LOAD_RECIPIE_SUCCESS,
        recipies
    })
}