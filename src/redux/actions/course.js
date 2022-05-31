import { getApi } from '../../utils/adminApi'
import store from '../store'
const LOAD_COURSE_REQUEST = 'LOAD_COURSE_REQUEST'
const LOAD_COURSE_SUCCESS = 'LOAD_COURSE_SUCCESS'
const LOAD_COURSE_FAILURE = 'LOAD_COURSE_FAILURE'
// function to fetch and load all available courses
/**
 * @returns Set all courses to redux
 */
export async function requestCourse() {
    loadCourseLoading(true)
    const {data,error} = await getApi('/courses')
    console.log(data)
    if (error) {
        loadCourseFailure(error)
        return
    }
    console.log(data)
    loadCourseSuccess(data.courses)
}
// function to fetch and load user courses 

// dispatchers for avalialbe course reducers
const loadCourseLoading = (isLoading) => {
    store.dispatch({
        type: LOAD_COURSE_REQUEST,
        isLoading
    })
}
const loadCourseFailure = (error) => {
    store.dispatch({
        type: LOAD_COURSE_FAILURE,
        error
    })
}
const loadCourseSuccess = (courses) => {
    store.dispatch({
        type: LOAD_COURSE_SUCCESS,
        courses
    })
}
// dispatchers for user registered courses
