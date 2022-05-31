import { postApi } from "../../utils/userApi"
import store from '../store'
const LOAD_AUTH_REQUEST = 'LOAD_AUTH_REQUEST'
const LOAD_AUTH_SUCCESS = 'LOAD_AUTH_SUCCESS'
const LOAD_AUTH_FAILURE = 'LOAD_AUTH_FAILURE'
// import * as SecureStore from 'expo-secure-store';
import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";
import axios from 'axios'

export async function requestAuth(data){
    loadAuthLoading(true)
    const url = '/login'
    const {data,error} = await postApi(url,data)
    loadAuthLoading(false)
    if(error){
        loadAuthFailure(error)
        return
    }
    
    authenticateUser({user:data.user,token:data.token})
}
export async function requestLogout() {
    axios.defaults.headers.common['authorization'] = ''
    loadAuthFailure('Logout successfull.')
}
const loadAuthLoading = (isLoading) =>{
    store.dispatch({
        type: LOAD_AUTH_REQUEST,
        isLoading
    })
}
const loadAuthFailure = (error) => {
    store.dispatch({
        type: LOAD_AUTH_FAILURE,
        error
    })
}
const authenticateUser = ({user,token,authenticated_as}) => {
    store.dispatch({
        type: LOAD_AUTH_SUCCESS,
        user,
        token,
        authenticated_as

    })
}