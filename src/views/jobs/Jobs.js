import React, {Component} from 'react';
import './Jobs.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {AxiosGet} from './../../redux/actions/jobsActions'



class Jobs extends Component {
    state = {
        dataJobs: [],
    }
   
    // const getJobs = () => {
    //     // const token = props.user.token
    //     // console.log(token)
    //     // axios.get('https://coding-test.rootstack.net/api/jobs', {
    //     //     headers: {'Authorization': 'bearer ' + token},
    //     // })
    //     //     .then(
    //     //         res => {
    //     //             console.log(res)
    //     //         }
    //     //     )
    // }

    componentDidMount () {
        const userToken = JSON.parse(localStorage.getItem('user'))
        axios.get('https://coding-test.rootstack.net/api/jobs', {
            headers: {'Authorization': 'bearer ' + userToken},
        })
        .then((res) =>{
            console.log(res)
                this.setState({
                    dataJobs:res.data.data
                })
                console.log(this.state.dataJobs)
            }
        )
    }
    
     render ()   {
        const {dataJobs} = this.state
        return (
            <div>
                <h1>List jobs</h1>
                <div className="bloque-contenedor">
                    <div className="table-responsive">                   
                        <div className="table-list">
                            <table className="table">
                                <thead className="table-head">
                                    <tr>
                                        <th>
                                            id
                                        </th>
                                        
                                        <th>
                                            titulo
                                        </th>
                                        
                                        <th>
                                            descripcion
                                        </th>
                                        
                                        <th>
                                            image
                                        </th>
                                        
                                        <th>
                                            Longitud y latitud
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="table-body">
                                    {dataJobs.map((dataJob) =>(
                                        <tr key={dataJob.id+dataJob.title}>
                                            <td>
                                                {dataJob.id}
                                            </td>
                                            
                                            <td>
                                            {dataJob.title}
                                            </td>

                                            <td>
                                            {dataJob.description}
                                            </td>

                                            <td>                                            
                                            
                                                <img width="50px" src={dataJob.image} alt="" />
                                            </td>
                                            
                                            <td>
                                            
                                            {dataJob.latitude} + {dataJob.longitude}  
                                            </td>
                                            
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
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
        AxiosGet: (data) => dispatch(AxiosGet(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Jobs);