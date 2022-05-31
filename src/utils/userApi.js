import axios from 'axios'
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = 'https://fa93-116-193-143-18.ngrok.io'
    // axios.defaults.baseURL = 'http://localhost:3001/'

} else {
    axios.defaults.baseURL = 'https://rootrsk-food-booking.herokuapp.com'
}
/**
 * @param {URL} url backend routename
 * @param {*} query query parameters 
 */
export async function getApi(url, query) {
    try {
        const response = await axios.get(url)
        if (response.data && response.data.error) {
            return {
                error: response.data.error,
                data: null
            }
        }
        return {
            data: response.data,
            error: null
        }
    } catch (error) {
        console.log(error)
        return {
            data: null,
            error: error.message
        }
    }
}
export async function postApi(url, data) {
    try {
        const response = await axios({
            url,
            method: 'post',
            data
        })
        if (response.data && response.data.error) {
            return {
                error: response.data.error,
                data: null
            }
        }
        return {
            data: response.data,
            error: null
        }
    } catch (error) {
        console.log(error)
        return {
            data: null,
            error: error.message
        }
    }
}

export async function patchApi(url, data) {
    try {
        const response = await axios({
            url,
            method: 'PATCH',
            data
        })
        if (response.data && response.data.error) {
            return {
                error: response.data.error,
                data: null
            }
        }
        return {
            data: response.data,
            error: null
        }
    } catch (error) {
        console.log(error)
        return {
            data: null,
            error: error.message
        }
    }
}