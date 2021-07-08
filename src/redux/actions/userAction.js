
export const UPDATE_NAME = 'UPDATE_NAME'
export const LOGIN_SESION = 'LOGIN_SESION'



// Creadores de acciones
export const updateName = (name) => {
    return {
        type: UPDATE_NAME,
        payload:{
            name
        }
    }
}

export const loginSesion = (arrayData) => {
    console.log(arrayData)
    return {
        type: LOGIN_SESION,
        payload:{
            id: arrayData.id,
            token: arrayData.token,
            email: arrayData.email,
            name: arrayData.name
        }
    }
}

// export const fetchPost = () => (dispatch) => {
//     fetch('https://coding-test.rootstack.net/api/auth/login')
//         .then(res => res.json)
//         .then(posts =>{

//         })
// }