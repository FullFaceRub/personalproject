import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo, getRedirect } from '../../ducks/reducer';
import Account from '../Account/Account';
import OrderHistory from '../Account/OrderHistory';
import cart from '../../images/carticon.png'
import Login from '../Account/Login';
import AccountLink  from '../Account/AccountLink';
// import UserProfile from 

class NavBar extends Component {

    componentDidMount() {
        this.props.getUserInfo()
    }


    render() {
        const user = this.props.user
        const redirect = this.props.redirect
        let accountLink = null;

        if (!user.auth_id) {
            accountLink = <Login
                url={redirect}
            />
        } else {
            accountLink = <AccountLink />
        }

        //if session user is present, show session user name and route to user profile component on click
        //if session user is not present, show login link
        //set both of these to single variable to be rendered depending on condition
        return (
            <div>
                <nav className="navbar">

                    <Link to='/' className="navlinks">Home<div className="line"></div></Link>
                    <Link to='/about' className="navlinks">About<div className="line"></div></Link>
                    <Link to='/inspiration' className="navlinks">Inspiration<div className="line"></div></Link>
                    <Link to='/products' className="navlinks">Products<div className="line"></div></Link>
                    {/* <a href={process.env.REACT_APP_LOGIN} className="navlinks">Login<div className="line"></div></a>
                    <Account/> */}
                    {accountLink}
                </nav>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        redirect: state.redirect,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { getUserInfo, getRedirect })(NavBar);