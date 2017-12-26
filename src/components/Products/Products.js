import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './Products.css';



export default class Products extends Component {
    componentDidMount(){
        console.log(this.props)
    }
    render() {
        return (
            <div className="ppage">
                <div className='pmain'>
                    <div className="pcategory" id="speakers"><Link to='/products/1'>Speakers</Link></div>
                    <div className="pcategory" id="wireless"><Link to='/products/2'>Wireless Speakers</Link></div>
                    <div className="pcategory" id="headphones"><Link to='/products/3'>Headphones</Link></div>
                    <div className="pcategory" id="car"><Link to='/products/4'>Car Audio</Link></div>
                </div>
            </div>
        )
    }
}