import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';



export default class Products extends Component {
    render() {
        return (
            <div className="ppage">
                <div className='pmain'>
                    <Link to='/products/1'><div className="pcategory" id="speakers">Speakers</div></Link>
                    <Link to='/products/2'><div className="pcategory" id="wireless">Wireless Speakers</div></Link>
                    <Link to='/products/3'><div className="pcategory" id="headphones">Headphones</div></Link>
                    <Link to='/products/4'><div className="pcategory" id="car">Car Audio</div></Link>
                </div>
            </div>
        )
    }
}