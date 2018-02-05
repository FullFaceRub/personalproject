import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo, getProduct, getRedirect, getCart } from '../../../../ducks/reducer';
import { Link, Switch, Route } from 'react-router-dom';
import { Dimensions, Reviews, Features } from './ProductTabs';

class Product extends Component {
    constructor() {
        super();

        this.state = {
            quantity: 0,
            productTab: 'features'
        }
        this.addToCart = this.addToCart.bind(this);
        this.inputQuantity = this.inputQuantity.bind(this);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.handleTab = this.handleTab.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo();
        let product = this.props.match.params.product
        this.props.getProduct(product);
        let url = this.props.location.pathname
        this.props.getRedirect(url);
    }

    inputQuantity(e) {
        this.setState({
            quantity: e
        })
    }

    increase() {
        let newQty = this.state.quantity + 1
        this.setState({
            quantity: newQty
        })
    }

    decrease() {
        let newQty
        if (this.state.quantity > 1) {
            newQty = this.state.quantity - 1;
        }
        else {
            newQty = 0
        }
        this.setState({
            quantity: newQty
        })
    }

    addToCart() {
        let product = this.props.match.params.product;
        let user = this.props.user;
        let quantity = this.state.quantity;
        let redirect = this.props.redirect;
        let cart = this.props.cart[0];
        let presence = false;
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product_id === product) {
                presence = true;
            }
        }
        if (quantity > 0) {
            if (!user.customer_id) {
                window.location.href = process.env.REACT_APP_LOGIN + '?redirectto=' + redirect
            } else if (presence === true) {
                axios.put(`api/cart/${user.customer_id}/${product}/${quantity}`).then(res => res.data)
            } else {
                axios.post(`/api/cart/${user.customer_id}/${product}/${quantity}`).then(res => this.props.getCart(user.customer_id))
            }
        } else {
            alert('Please enter a quantity')
        }
        this.setState({
            quantity: 0
        })
    }

    handleTab(e){
        this.setState({
            productTab: e
        })
    }

    render() {
        let { product } = this.props
        let detailTab;
        if (this.state.productTab == 'dimensions') {
            detailTab = <Dimensions dimensions={product[0].product_dimensions} />
        } else if (this.state.productTab == 'reviews') {
            detailTab = <Reviews />
        } else if (this.state.productTab == 'features') {
            detailTab = this.props.product.length > 0 ? <Features features={product[0].product_features} /> : null
        }
        let productMap = this.props.product.map((e, i) => {
            let formatTotal = Number(e.product_price) ? "$" + e.product_price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : "$0.00";
            return <div key={i} className="productdetail">
                <div>
                    <h1 className="productname">{e.product_name}</h1>
                    <img src={e.product_image} alt={e.product_name} className="productdetailimg" />
                </div>
                <div className="productdetailbody">
                    <div className="pbackbutton">
                        <Link to={`/products/${e.category_id}`} className="pbackbutton">Back to Products</Link>
                    </div>
                    <div className="description">{e.product_description}</div>
                    <div className="productdetailprice">
                        <h1>Price: {formatTotal}</h1>
                        <div className="field" id="quantityfield">
                            <input id="quantity" placeholder="Qty." type="number" disabled="disabled" value={this.state.quantity} onChange={e => this.inputQuantity(e.target.value)}></input>
                            <div className="quantityControl">
                                <button onClick={this.increase}>+</button>
                                <button onClick={this.decrease}>-</button>
                            </div>
                            <button className="addToCart" onClick={this.addToCart}>Add to cart</button>
                        </div>
                    </div>
                    <div className="detailtable">
                        <div className="producttabs">
                            <button onClick={()=>this.handleTab('features')} className="productsubnav">Features:</button>
                            <button onClick={()=>this.handleTab('dimensions')} className="productsubnav">Dimensions:</button>
                            <button onClick={()=>this.handleTab('reviews')} className="productsubnav">Reviews:</button>
                        </div>
                        <div className="detailtab">
                            {detailTab}
                        </div>
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
        redirect: state.redirect,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { getUserInfo, getProduct, getRedirect, getCart })(Product);