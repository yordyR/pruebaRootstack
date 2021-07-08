import React, {Component} from 'react'
import './Mapa.css'
import axios from 'axios'
import {connect} from 'react-redux'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


class Mapa extends Component {
    state = {
        dataJobs: [{data}],
    }

    render () {
        return (
            <div>
                <h1>List jobs maps</h1>
                {this.state.dataJobs}
               
            </div>
        )
    }
}
//retorna el estado
const mapStateToProps = (state) => {
    return {
        state
    }
}

//retorna las diferentes acciones que queremos disparar
const mapDispatchToProps = (dispatch) =>{
    return {
    }
}
export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Mapa);