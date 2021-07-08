import { UPDATE_NAME, LOGIN_SESION } from '../actions/userAction'
// estado actual

// Nombres de acciones
export const VIEWTOKEN = 'VIEWTOKEN';

const initialState = {
    id: '',
    name: 'Hola, bienvenido', 
    email: '',
    token:''
}

// reducer
function user (state = initialState, action) {
    switch (action.type) {
        case UPDATE_NAME:
            return {
                ...state,
                name: action.payload.name
            }
        case LOGIN_SESION:
            return{
                id: action.payload.id,
                name: action.payload.name,
                email: action.payload.email,
                token: action.payload.token

            }
        default:
            return state
    }
}


export default user;