import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, getRedirect } from '../../ducks/reducer';
import { Link, Route, Switch } from 'react-router-dom';
import OrderHistory from '../Account/OrderHistory';
import Cart from '../Account/Cart';

class Account extends Component {

    componentDidMount() {
        this.props.getUserInfo();
        let url = this.props.location.pathname
        this.props.getRedirect(url);
    }

    componentWillReceiveProps() {
        this.props.getUserInfo();
    }

    render() {
        const user = this.props.user;
        let accountDisplay;
        if (!user) {
            accountDisplay = <div className="navlinks">
                <a href={process.env.REACT_APP_LOGIN} className="navlinks">Login<div className="line"></div></a> to see your account info.
            </div>
        } else {
            accountDisplay = <div className='accountmain'>
                <div className="accounttop">
                    <div className="navlinks">Your Account<div className="line"></div></div>
                    <a href="/auth/logout"><button className="logout">Logout</button></a>
                </div>
                <div>
                    <Switch>
                        <Route path='/account/orderhistory' component={OrderHistory} />
                        <Route path='/account/cart' component={Cart} />
                    </Switch>
                    <div className="accountbody">
                        <Link to="/account/cart" className="navlinks" id="accountlink"><div>View Cart<div className="line"></div></div></Link>
                        <h1 className="navlinks" id="orderhistory">Order History</h1>
                        <OrderHistory />
                    </div>
                </div>
            </div>
        }


        return (
            <div>
                {accountDisplay}
                <div className="cartfooter">
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        redirect: state.redirect
    }
}

export default connect(mapStateToProps, { getUserInfo, getRedirect })(Account)