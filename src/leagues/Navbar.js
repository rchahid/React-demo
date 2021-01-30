import React from 'react'
import './navbar.css'

const Navbar =(props) =>{
    const {title}=props;
    return (
        <div>
            <nav class="navbar navbar-dark " >
               
            <h1>{title}</h1></nav>
        </div>
    )
}
export default Navbar;