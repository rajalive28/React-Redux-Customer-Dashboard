import { combineReducers } from 'redux'
import admin from './admin-reducer'
import customerReducer from './customer-reducer';

const userApp = combineReducers({
    admin:admin,
    customers:customerReducer
})

export default userApp