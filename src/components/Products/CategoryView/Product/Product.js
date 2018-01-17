import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserInfo, getProduct, getRedirect} from '../../../../ducks/reducer';

class Product extends Component {
    constructor() {
        super();

        this.state = {
            quantity: 0
        }
        this.addToCart=this.addToCart.bind(this);
        this.inputQuantity=this.inputQuantity.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo();
        let product = this.props.match.params.product
        this.props.getProduct(product);
        let url = this.props.location.pathname
        this.props.getRedirect(url);
    }

    inputQuantity(e){
        this.setState({
            quantity:e
        })
    }

    addToCart(){
        let product = this.props.match.params.product;
        let user = this.props.user;
        let quantity = this.state.quantity;
        if(!user){
            axios.get('/auth')
            //redirect them to auth0
        } else {
        axios.post(`/api/cart/${user.customer_id}/${product}/${quantity}`).then(res=>res.data)}
        this.setState({
            quantity: 0
        })
    }

    render() {
        let productMap = this.props.product.map((e, i) => {
            return <div key={i} className="productdetail">
                <div>
                    <h1 className="productname">{e.product_name}</h1>
                    <img src={e.product_image} alt={e.product_name} className="productdetailimg" />
                </div>
                <div className="productdetailbody">
                    <p>Overview: {e.product_description}</p>
                    <p>Features: {e.product_features}</p>
                    <p>Dimensions: {e.product_dimensions}</p>
                    <div className="productdetailprice">
                        <h1>${e.product_price}</h1>
                        <input placeholder="Insert Quantity" value={this.state.quantity} onChange={e=>this.inputQuantity(e.target.value)}></input>
                        <button className="addToCart" onClick={this.addToCart}>Add to cart</button>
                    </div>
                </div>
            </div>
        })
        return (
            <div>
                {productMap}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        product: state.product,
        redirect: state.redirect
    }
}

export default connect(mapStateToProps, {getUserInfo, getProduct, getRedirect})(Product);