import {INCREMENT, DECREMENT} from '../actions/counterActions'
// estado actual
const initialState= 0;


// reducer
function counter (state = initialState, action) {
    switch (action.type) {
        case INCREMENT:            
            return state + 1

        case DECREMENT:
            return state - 1
    
        default:
            return state
    }
}


export default counter;