import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../images/carticon.png';
import { connect } from 'react-redux';
import {getUserInfo,getCart} from '../../ducks/reducer';

class AccountLink extends Component {

    componentDidMount(){
        let user = this.props.user.customer_id
        this.props.getUserInfo();
        this.props.getCart(user)
    }

    render() {
        let counter = 0;
        let cartArr = this.props.cart[0];

        for(var i=0;i<cartArr.length;i++){
            counter+=cartArr[i].quantity
        }

        return (
            <div className='account mobchild'>
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