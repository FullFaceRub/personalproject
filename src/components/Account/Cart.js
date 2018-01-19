import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart, getUserInfo, incrementCart, decrementCart, getRedirect } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

class Cart extends Component {

    componentDidMount() {
        let user = this.props.user.customer_id;
        this.props.getUserInfo();
        this.props.getCart(user);
        let url = this.props.location.pathname
        this.props.getRedirect(url);
    }

    // componentWillReceiveProps(nextProps){
        // let user = nextProps.user.customer_id;
        // this.props.getUserInfo();
        // this.props.getCart(user);
    // }

    render() {
        let cart = this.props.cart;
        console.log(cart);
        let total = cart[1].length < 1 ? 0 : cart[1][0].total;
        let cartMap;
        if (cart[0].length < 1) {
            cartMap = <h1>Your cart is empty or you just need to <a href={process.env.REACT_APP_LOGIN} className="navlinks">Login<div className="line"></div></a></h1>
        } else {
            cartMap = cart[0].map((e, i) => {
                return <div key={i} className="carttile">
                    <Link to={`/product/${e.product_id}`} className="carttilebody">
                        <img src={e.product_image} alt={e.product_name} className="ptileimg" />
                        <h1>{e.product_name}</h1>
                    </Link>
                    <div className="ptilebody" id="cart">
                        <h1>{e.quantity}</h1>
                        <br />
                        <div className="addremove">
                            <button onClick={(event) => this.props.incrementCart(e.customer_id, e.product_id, e.quantity)}>Add</button>
                            <button onClick={(event) => this.props.decrementCart(e.customer_id, e.product_id, e.quantity)}>Remove</button>
                        </div>
                    </div>
                    <div className="ptileprice">
                        <h1>${e.product_price}</h1>
                    </div>
                </div>
            })
        }

        // if (cart.length < 1) {
        //     cartDisplay = { cartMap }
        // } else {
        //     cartDisplay = <div> <div className="topoftable">
        //         <h1>Product:</h1>
        //         <h1>Quantity:</h1>
        //         <h1>Price:</h1>
        //     </div>
        //         {cartMap}
        //         <h1 className="carttotal">Your cart Total: ${cartTotal}</h1>
        //     </div>
        // }

        return (
            <div className="cartmain">
                <div className="topoftable">
                    <h1>Product:</h1>
                    <h1>Quantity:</h1>
                    <h1>Price:</h1>
                </div>
                {cartMap}
                <div className="carttotal">
                    <h1 >${total}</h1>
                    <h1>Your cart Total:</h1>
                    <div></div>
                    <div></div>
                </div>
                <div className="checkout">
                    <Checkout />
                    <div></div>
                    <div></div>
                </div>
                <div className="cartfooter">
                </div>
                {/* {cartDisplay} */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        cart: state.cart,
        redirect: state.redirect
    }
}

export default connect(mapStateToProps, { getCart, getUserInfo, incrementCart, decrementCart, getRedirect })(Cart)