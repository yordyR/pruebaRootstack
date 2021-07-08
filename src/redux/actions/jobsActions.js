import axios from 'axios'
export const AXIOS_GET_REQUEST = 'AXIOS_GET_REQUEST'
export const AXIOS_GET_SUCCESS = 'AXIOS_GET_SUCCESS'
export const AXIOS_GET_ERROR = 'AXIOS_GET_ERROR'


export const AxiosGet = (data) => (dispatch) => {
    console.log("jobsaction", data)
    const token = data.state.user.token
    console.log(token)

    dispatch({type:AXIOS_GET_REQUEST})

    axios.get('https://coding-test.rootstack.net/api/jobs', {
        headers: {'Authorization': 'bearer ' + token},
    })
    .then(
        res => {
            console.log("misjobs", res.data)

            dispatch({
                type: AXIOS_GET_SUCCESS,
                payload:{
                    jobs: res.data
                }
            })
        }
    )
    .catch (error => {
        dispatch({
            type: AXIOS_GET_ERROR,
            error: error.toString()
        })
    })
}
