const LOAD_QUIZ_REQUEST = 'LOAD_QUIZ_REQUEST'
const LOAD_QUIZ_SUCCESS = 'LOAD_QUIZ_SUCCESS'
const LOAD_QUIZ_FAILURE = 'LOAD_QUIZ_FAILURE'
import { getApi } from '../../utils/userApi'
import store from '../store'
// function to fetch and load all available courses
export async function requestQuizes(data) {
    loadQuizLoading(true)
    const response = await getApi('/user/quizs')
    if (response.error) {
        loadQuizFailure(response.error)
        return
    }
    loadQuizSuccess(response.quizes)
}
// function to fetch and load user courses 
// export async function requestUserCourse(data) {
//     loadUserCourseLoading(true)
//     const response = await getApi('/user/courses')
//     if (response.error) {
//         loadUserCourseFailure(response.error)
//         return
//     }
//     loadUserCourseSuccess(response.subscriptions)
// }
// dispatchers for avalialbe course reducers
const loadQuizLoading = (isLoading) => {
    store.dispatch({
        type: LOAD_QUIZ_REQUEST,
        isLoading
    })
}
const loadQuizFailure = (error) => {
    store.dispatch({
        type: LOAD_QUIZ_FAILURE,
        error
    })
}
const loadQuizSuccess = (quizes) => {
    store.dispatch({
        type: LOAD_QUIZ_SUCCESS,
        quizes
    })
}
// dispatchers for user registered courses
