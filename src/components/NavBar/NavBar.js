import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="navbar">
                        <li>Home</li>
                        <li>About</li>
                        <li>Inspiration</li>
                        <li>Products</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default NavBar;