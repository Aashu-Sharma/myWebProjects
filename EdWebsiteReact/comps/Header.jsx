import React, {useState, useRef} from 'react'
import '../src/App.css'
import logo from '../Images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faBars} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom';


function Header() {

    const myRef = useRef();

    const showMenu = () => {
        myRef.current.style.right = "0";
    }

    const hideMenu = () => {
        myRef.current.style.right = "-220px";
    }
    return (
        <nav>
            <a href=""><img src={logo} alt="" /></a>
            <div className="nav-links" id="navLinks" ref={myRef}>
                <FontAwesomeIcon icon={faX} className="icon" onClick={hideMenu} />
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => {
                        return isActive ? { color: "#f44336" } : {};
                        }}>HOME</NavLink></li>
                    <li><NavLink to="/about" style={({ isActive }) => {
                        return isActive ? { color: "#f44336" } : {};
                        }}>ABOUT</NavLink></li>
                    <li><NavLink to="/courses" style={({ isActive }) => {
                        return isActive ? { color: "#f44336" } : {};
                        }}>COURSES</NavLink></li >
                    <li><NavLink to="/blog" style={({ isActive }) => {
                        return isActive ? { color: "#f44336" } : {};
                        }}>BLOG</NavLink></li>
                    <li><NavLink to="/contact" style={({ isActive }) => {
                        return isActive ? { color: "#f44336" } : {};
                        }}>CONTACT US</NavLink></li>
                </ul>
            </div>
            <FontAwesomeIcon icon={faBars} className="icon" onClick={showMenu} />
        </nav>
    )
}

export default Header
