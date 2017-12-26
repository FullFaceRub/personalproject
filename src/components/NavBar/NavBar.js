import React, { Component } from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">

                    <Link to='/' className="navlinks">Home</Link>
                    <Link to='/about' className="navlinks">About</Link>
                    <Link to='/inspiration' className="navlinks">Inspiration</Link>
                    <Link to='/products' className="navlinks">Products</Link>
                    <Link to='/login' className="navlinks">Login</Link>

                </nav>
        
            </div>
        )
    }
}
export default NavBar;