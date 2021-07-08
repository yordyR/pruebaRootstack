import React from 'react'
import {connect} from 'react-redux';
import { increment, decrement } from '../../redux/actions/counterActions'
import { updateName, loginSesion } from './../../redux/actions/userAction';
import axios from 'axios'

//provider acceso al store desde cualquier lugar 

const Login = (props) => {
    console.log(props)

    // const inc = () =>{
    //     props.increment()
    // }
    
    // const dec = () =>{
    //     props.decrement()
    // }

    const handlerChange = (e) => {
        const email = e.target.value
        console.log(e.target.value)

        props.updateName(email)
    }

    const getDataUser = (data) => {
        console.log(data)
        axios.get('https://coding-test.rootstack.net/api/auth/me', {
            headers: {'Authorization': 'bearer ' + data},
        })
        .then(response => {
            console.log(response.data)
            const dataUser = response.data
            dataUser.token =data
            console.log(data)
            console.log(dataUser)
            props.loginSesion(dataUser)
            
        })
        .catch(function (error) {
            console.log(error);
            alert("Los datos de usuario son incorrectos")
        });
    }

    const handlerSubmit = (e) => {
        e.preventDefault();
        const email = e.target[0].value
        const password = e.target[1].value
        console.log(e.target[0].value)
        if(email === ""){
            alert("el email esta vacio")
        }else{
            axios.post('https://coding-test.rootstack.net/api/auth/login', {
                email,
                password
            })
            .then(res => {
                console.log(res)
                const data = res.data.access_token
                // res => this.setState({
                //     datoAtualSN:res.data
                // })

                localStorage.setItem('user',JSON.stringify(data))
                
                getDataUser(data)




            })
            .catch(function (error) {
                console.log(error);
                alert("Los datos de usuario son incorrectos")
            });

        }
    }

    return (
        <div>
            <h1>
                login 1
            </h1>
            <button onClick={props.increment} >+</button>
            <button onClick={props.decrement} >-</button>
            <p>
                {props.state.counter}
            </p>
            <form onSubmit={handlerSubmit}>
                <div> 
                    <p>
                        <input type='text' value="zboncak.nathen@example.org" placeholder='digita el email' />
                    </p>
                </div>
                <div>
                    <p>
                        <input type='text' value="password" placeholder='digita el password' />
                    </p>
                </div>
                <button>
                    Loguear
                </button>
            </form>
        </div>
    )
}

//retorna el estado
const mapStateToProps = (state) => {
    console.log(state)
    return {
        state
    }
}

//retorna las diferentes acciones que queremos disparar
const mapDispatchToProps = (dispatch) =>{
    return {
        // getToken: () => dispatch(viewToken())
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        updateName: (name) => dispatch(updateName(name)),
        loginSesion: (data) => dispatch(loginSesion(data))
    }
}

  
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Login);