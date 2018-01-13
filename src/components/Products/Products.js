import React, { Component } from 'react';
import { Link } from 'react-router-dom';



export default class Products extends Component {
    render() {
        return (
            <div className="ppage">
                <div className='pmain'>
                    <Link to='/products/1' className="pcategory" id="speakers"><div className="pnavlinks">Speakers<div className="line"></div></div></Link>
                    <Link to='/products/2' className="pcategory" id="wireless"><div className="pnavlinks">Wireless Speakers<div className="line"></div></div></Link>
                    <Link to='/products/3' className="pcategory" id="headphones"><div className="pnavlinks">Headphones<div className="line"></div></div></Link>
                    <Link to='/products/4' className="pcategory" id="car"><div className="pnavlinks">Car Audio<div className="line"></div></div></Link>
                </div>
            </div>
        )
    }
}