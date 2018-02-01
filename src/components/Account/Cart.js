import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart, getUserInfo, incrementCart, decrementCart, getRedirect } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

class Cart extends Component {
    constructor(){
        super();

        this.state = {
            total: 0,
        }
    }

    componentDidMount() {
        let user = this.props.user.customer_id;
        this.props.getUserInfo();
        this.props.getCart(user);
        let url = this.props.location.pathname
        this.props.getRedirect(url);
        let cart = this.props.cart;
        let total = cart[1].length < 1 ? 0 : cart[1][0].total;
        this.setState({
            total: total
        })
    }

    componentWillReceiveProps(nextProps){
        let cart = nextProps.cart;
        let total = cart[1].length < 1 ? 0 : cart[1][0].total;
        this.setState({
            total: total,
        })



    }

    
    render() {
        let cart = this.props.cart
        let formatTotal = Number(this.state.total) ? "$"+this.state.total.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"): "$0.00";
        let cartMap;
        if (cart[0].length < 1) {
            cartMap = <h1>Your cart is empty</h1>
        } else {
            cartMap = cart[0].map((e, i) => {
                let formatPrice = Number(e.product_price) ? "$"+e.product_price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"): "$0.00";
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
                        <h1>{formatPrice}</h1>
                    </div>
                </div>
            })
        }

        return (
            <div className="cartmain">
                <div className="topoftable">
                    <h1>Product:</h1>
                    <h1>Quantity:</h1>
                    <h1>Price:</h1>
                </div>
                {cartMap}
                <div className="carttotal">
                    <h1 >{formatTotal}</h1>
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