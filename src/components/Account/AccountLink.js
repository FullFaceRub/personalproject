import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../images/carticon.png';


export function Login (props) {
    console.log(props.url)

        return (
            <a href={process.env.REACT_APP_LOGIN+'?redirectto='+props.url} className="navlinks">Login<div className="line"></div></a>
        )
    }

export function AccountLink(){
        return (
            <div className='account'>
                <Link to='/account' className="navlinks">Your Account<div className="line"></div></Link>
                <Link to="/account/cart"><img src={cart} alt="cart" className="cart" /></Link>
            </div>
        )
    }