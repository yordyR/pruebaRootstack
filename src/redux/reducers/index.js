import {combineReducers} from 'redux'
import counter from './counterReducer'
import user from './userReducer'
import jobs from './jobsReducer'

export default combineReducers({
    counter,
    user,
    jobs
})