import React from 'react';
import {Link } from 'react-router-dom';
import './Header.css';
import avatar from '../../assets/images/avatar.png'
import logo from '../../assets/images/logo.png'
import InfoUser from './../user/InfoUser'

const Header = () => {
    return (
        <div className="header">
            <div className="header-logo">
                <Link to="/" >
                    <img  
                        className="" 
                        src={logo}
                        alt="CRM - Addi"  />
                </Link>
                        
            </div>
            <div className="header-avatar">
                
                <div className="header-avatar--logo">
                    <Link to="/login">
                        <img 
                            className="" 
                            src={avatar} 
                            alt="CRM - Addi"  />
                            <span>
                                {/* Yordy Riascos G */}
                            <       InfoUser />
                            </span>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}

export default Header;