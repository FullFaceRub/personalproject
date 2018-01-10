import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar">

                    <Link to='/' className="navlinks">Home<div className="line"></div></Link>
                    <Link to='/about' className="navlinks">About<div className="line"></div></Link>
                    <Link to='/inspiration' className="navlinks">Inspiration<div className="line"></div></Link>
                    <Link to='/products' className="navlinks">Products<div className="line"></div></Link>
                    <Link to='/login' className="navlinks">Login<div className="line"></div></Link>
                    {/* <div className="placeholder">Placeholder</div> */}

                </nav>
        
            </div>
        )
    }
}
export default NavBar;