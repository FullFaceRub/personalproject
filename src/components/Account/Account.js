import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import { Link, Route, Switch } from 'react-router-dom';
import OrderHistory from '../Account/OrderHistory';
import Cart from '../Account/Cart';

class Account extends Component {

    componentDidMount() {
        this.props.getUserInfo();
    }

    componentWillReceiveProps(){
        this.props.getUserInfo();
    }

    render() {
        const user = this.props.user;
        let accountDisplay;
        if (!user) {
            // return (
            accountDisplay = <div className="navlinks">
                <a href={process.env.REACT_APP_LOGIN} className="navlinks">Login<div className="line"></div></a> to see your account info.
            </div>
            // )
        } else {
            // return (
            accountDisplay = <div className='account'>
                <Link to='/account' className="navlinks">Your Account<div className="line"></div></Link>
                {/* <Link to="/account/cart"><img src={cart} alt="cart" className="cart" /></Link> */}
                <div className='subnav'>
                    <Link to='/account' className='subnavlinks'>Account Info</Link>
                    <Link to='/account/orderhistory' className='subnavlinks'>Order History</Link>
                </div>
                <div className='main'>
                    <Switch>
                        <Route path='/account/orderhistory' component={OrderHistory} />
                        <Route path='/account/cart' component={Cart} />
                    </Switch>
                    <div className="accountbody">
                        <button>Logout</button>
                        <button>View Cart</button>
                        <h1>Order History</h1>
                        <OrderHistory />
                    </div>
                </div>
            </div>
            // )
        }


        return (
        <div>
            <div className="main">
                <h1>Your Account</h1>
                {accountDisplay}
            </div>
            <div className="cartfooter">
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(Account)