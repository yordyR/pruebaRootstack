import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

  
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-menu">

                <ul>
                    <li>
                        <NavLink
                            to={{
                                pathname: '/',
                                search:'?ordenar=nombre',
                                hash: '#hash-otro',
                                state:{
                                name: 'pruebaname',
                                age: 25
                                }
                            }}
                        
                        >
                            <span>
                                Home 
                            </span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/jobs" 
                        >
                            <span>
                                jobs
                            </span>
                        </NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/mapas" >
                            <span>
                                Maps   
                            </span>
                        </NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}


export default Sidebar;