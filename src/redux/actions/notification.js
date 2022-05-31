import {postApi,getApi} from "../../utils/adminApi"
import store from '../store'
const LOAD_NOTIFICATION_REQUEST = 'LOAD_NOTIFICATION_REQUEST'
const LOAD_NOTIFICATION_SUCCESS = 'LOAD_NOTIFICATION_SUCCESS'
const LOAD_NOTIFICATION_FAILURE = 'LOAD_NOTIFICATION_FAILURE'
export async function requestNotification(data) {
    loadAuthLoading(true)
    const response = await getApi('/notifications', data)
    loadAuthLoading(false)
    if (response.error) {
        loadAuthFailure(response.error)
        return
    }
    loadAuthSuccess(response.notifications)
}
const loadAuthLoading = (isLoading) => {
    store.dispatch({
        type: LOAD_NOTIFICATION_REQUEST,
        isLoading
    })
}
const loadAuthFailure = (error) => {
    store.dispatch({
        type: LOAD_NOTIFICATION_FAILURE,
        error
    })
}
const loadAuthSuccess = (notifications) => {
    store.dispatch({
        type: LOAD_NOTIFICATION_SUCCESS,
        notifications
    })
}