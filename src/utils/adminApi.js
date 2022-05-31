import axios from 'axios'
import { useSnackbar } from 'notistack';
if (process.env.NODE_ENV === 'development') {
    axios.defaults.baseURL = 'https://rootrsk-food-booking.herokuapp.com/admin'
    // axios.defaults.baseURL = 'http://localhost:3001/admin'
} else {
    axios.defaults.baseURL = 'https://rootrsk-food-booking.herokuapp.com/admin';
}

export async function getApi(url,) {
    // const { enqueueSnackbar } = useSnackbar();
    try {
        const response = await axios.get(url)
        if (response.data.error) {
            return {
                error: response.data.error,
                data: null
            }
        }
        return {
            error: null,
            data: response.data
        }
    } catch (error) {
        console.log(error.message)
        return {error:error.message}
    }
}
export async function postApi(url, data) {
    try {
        // console.log(data)
        const response = await axios.post(url, data)
        console.log(response)
        if(response.data.error){
            return {
                error:response.data.error,
                data:null
            }
        }
        return {
            error:null,
            data: response.data
        }
    } catch (error) {
        console.log(error)
        return {error:error.message}
    }
}
export async function patchApi(url, data) {
    try {
        // console.log(data)
        const response = await axios.patch(url, data)
        if (response.data.error) {
            return {
                error: response.data.error,
                data: null
            }
        }
        return {
            error: null,
            data: response.data
        }
    } catch (error) {
        console.log(error.message)
        return {error:error.message}
    }
}
export async function deleteApi(url, data) {
    try {
        console.log(data)
        const response = await axios.delete(url,{data})
        if (response.data.error) {
            return {
                error: response.data.error,
                data: null
            }
        }
        return {
            error: null,
            data: response.data
        }
    } catch (error) {
        console.log(error.message)
        return {
            error: error.message
        }
    }
}