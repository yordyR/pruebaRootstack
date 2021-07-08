import React from 'react'
import {connect} from 'react-redux';


const InfoUser = (props) => {
    return (
        <span>{props.name} <br/> <span>{props.email}</span>  </span>
    )
}


//retorna el estado
const mapStateToProps = (state) => {
    return {
        name: state.user.name,
        email: state.user.email
    }
}

//retorna las diferentes acciones que queremos disparar
const mapDispatchToProps = (dispatch) =>{
    return {
        // getToken: () => dispatch(viewToken())
    }
}

  
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(InfoUser);