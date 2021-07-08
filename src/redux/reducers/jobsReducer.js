import {AXIOS_GET_REQUEST, AXIOS_GET_SUCCESS, AXIOS_GET_ERROR} from './../actions/jobsActions'

const initialState = {
    jobs: [],
    isFetching: false,
    error: null
}

function jobs (state = initialState, actions){
    switch (actions.type) {
        case AXIOS_GET_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case AXIOS_GET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                posts: actions.payload.jobs
            }
        case AXIOS_GET_ERROR:
            return{
                ...state,
                isFetching: false,
                error: actions.payload.error
            }
        default:
            return state
    }
}

export default jobs