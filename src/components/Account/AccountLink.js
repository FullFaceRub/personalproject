import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../images/carticon.png';
import { connect } from 'react-redux';
import {getUserInfo,getCart} from '../../ducks/reducer';

class AccountLink extends Component {

    componentDidMount(){
        // let user = this.props.user.customer_id
        // this.props.getUserInfo();
        // this.props.getCart(user)
    }

    componentWillReceiveProps(nextProps){
        let user = nextProps.user.customer_id;
        this.props.getUserInfo();
        this.props.getCart(user);
    }

    render() {
        let counter = 0;
        let cartNum = this.props.cart[0] ? this.props.cart[0].map((e, i) => {
            counter += Number(e.quantity)
            return counter;
        }) : 0
        return (
            <div className='account'>
                <Link to='/account' className="navlinks">Your Account<div className="line"></div></Link>
                <Link to="/account/cart" className="cartcontainer"><img src={cart} alt="cart" className="cart" />
                    <div className="cartCirc">
                       <div className="cartNum">{counter}</div>
                    </div>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart,
        user: state.user
    }
}

export default connect(mapStateToProps, {getCart,getUserInfo})(AccountLink);