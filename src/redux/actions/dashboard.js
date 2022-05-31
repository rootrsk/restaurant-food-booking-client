import {postApi,getApi} from "../../utils/adminApi"
import store from '../store'
const LOAD_DASHBOARD_REQUEST = 'LOAD_DASHBOARD_REQUEST'
const LOAD_DASHBOARD_SUCCESS = 'LOAD_DASHBOARD_SUCCESS'
const LOAD_DASHBOARD_FAILURE = 'LOAD_DASHBOARD_FAILURE'
export async function fetchDashboardDetails() {
    setLoading(true)
    const {error,data} = await getApi('/dashboard')
    setLoading(false)
    if (error) {
        console.log(error)
        loadFetchFailuare(error)
        return
    }
    loadFetchSuccess(data)
}
const setLoading = (isLoading) => {
    store.dispatch({
        type: LOAD_DASHBOARD_REQUEST,
        isLoading
    })
}
const loadFetchFailuare = (error) => {
    store.dispatch({
        type: LOAD_DASHBOARD_FAILURE,
        error
    })
}
const loadFetchSuccess = (data) => {
    store.dispatch({
        type: LOAD_DASHBOARD_SUCCESS,
        data
    })
}