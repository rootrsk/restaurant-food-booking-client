import { createStore,combineReducers } from 'redux'
import authReducer from './reducers/auth'
import notificationReducer from './reducers/notification'
import offerReducer from './reducers/offer'
import dashboardReducer from './reducers/dashboard'
import recipieReducer from './reducers/recipie'

const store = createStore(
    combineReducers({
        auth: authReducer,
        recipie:recipieReducer,
        notification: notificationReducer,
        offer: offerReducer,
        dashboard : dashboardReducer
    })
)

export default store