import {AppBar, Toolbar, Typography} from '@mui/material';
import React from 'react';
import {NavLink}from 'react-router-dom';
import './top.css';

const Top = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar sx = {{display: "flex",justifyContent:"space-between"}}>
                <Typography >
                   <h1 id="title"><b> DREAM & GO </b></h1>
                   <h4>Bus Ticket Booking </h4>
                </Typography>
                <ul className=''>
                    <li><NavLink id="navLink" style={({isActive})=>({color : isActive ? 'white':'black'})} to="/">Home</NavLink></li>
                    {/* <li><NavLink style={({isActive})=>({color : isActive ? 'white':'black'})}to="/about">About</NavLink></li> */}
                    {/* <li><NavLink style={({isActive})=>({color : isActive ? 'white':'black'})}to= "/contact">Contact</NavLink></li> */}
                    <li><NavLink id="navLink" style={({isActive})=>({color : isActive ? 'white':'black'})}to = "/login">Login</NavLink></li>
                    <li><NavLink id="navLink" style={({isActive})=>({color : isActive ? 'white':'black'})}to = "/Signup">Signup</NavLink></li>
                    
                </ul>
            </Toolbar>
        </AppBar>
    )
}
export default Top;