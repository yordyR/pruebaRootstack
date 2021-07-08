import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

//MIDLEWARE
// logger sin redux logger.
// const logger = (store)  => {
//     return(next) =>{
//         return (action) =>{
//             console.log('accionmid', action)
//             next(action)
//         }
//     }
// }

// combinar varios reducer
// const reducerPrincipal = combineReducers({
//     counter,
//     user
// })
// Store
//Almacenamiento de nuestro estado
const store = createStore(rootReducer, applyMiddleware(logger,thunk))
console.log(store.getState())


// Acciones
// store.dispatch(viewToken())

export default store