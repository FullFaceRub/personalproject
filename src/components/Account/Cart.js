import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCart, getUserInfo } from '../../ducks/reducer';

class Cart extends Component {

    componentDidMount() {
        let user = this.props.user.customer_id;
        this.props.getUserInfo();
        this.props.getCart(user);
    }

    render() {
        // console.log(this.state.cartProducts)
        let cart = this.props.cart
        console.log(cart)
        let cartMap;
            if (cart.length < 1) {
                console.log('hit')
                cartMap =  <h1>Your cart is empty</h1>
            } else {
                cartMap = cart.map((e,i)=>{
                    return <img src={e.product_image} alt={e.product_name} />
                })
            }
        // }

        return (
            <div>
                {cartMap}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        cart: state.cart

    }
}

export default connect(mapStateToProps, { getCart, getUserInfo })(Cart)//add getCart to export 