import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { getUserInfo, getProduct, getRedirect } from '../../../../ducks/reducer';
import { Link } from 'react-router-dom';
import { Dimensions, Reviews, Features } from './ProductTabs';

class Product extends Component {
    constructor() {
        super();

        this.state = {
            quantity: 0
        }
        this.addToCart = this.addToCart.bind(this);
        this.inputQuantity = this.inputQuantity.bind(this);
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

    addToCart() {
        let product = this.props.match.params.product;
        let user = this.props.user;
        let quantity = this.state.quantity;
        // if (!user) {
        //     axios.get('/auth')
        //     //redirect them to auth0
        // } else {
        axios.post(`/api/cart/${user.customer_id}/${product}/${quantity}`).then(res => res.data)
        // }
        this.setState({
            quantity: 0
        })
    }

    render() {
        let { product } = this.props
        let detailTab;
        if (this.props.location.pathname.includes("dimensions")) {
            detailTab = <Dimensions dimensions={product[0].product_dimensions} />
        } else if (this.props.location.pathname.includes("reviews")) {
            detailTab = <Reviews />
        } else if (this.props.location.pathname.includes("features")) {
            detailTab = <Features features={product[0].product_features} />
        }
        let productMap = this.props.product.map((e, i) => {
            return <div key={i} className="productdetail">
                <div>
                    <h1 className="productname">{e.product_name}</h1>
                    <img src={e.product_image} alt={e.product_name} className="productdetailimg" />
                </div>
                <div className="productdetailbody">
                    <div className="description">{e.product_description}</div>
                    <div className="productdetailprice">
                        <h1>Price: ${e.product_price}</h1>
                        <div className="field" id="quantityfield">
                            <input id="quantity" placeholder="Qty." type="text" pattern="[0-9]*" value={this.state.quantity} onChange={e => this.inputQuantity(e.target.value)}></input>
                            <button className="addToCart" onClick={this.addToCart}>Add to cart</button>
                        </div>
                    </div>
                    <div className="detailtable">
                        <div className="producttabs">
                            <Link to={`/product/${e.product_id}/features`} className="productsubnav">Features:</Link>
                            <Link to={`/product/${e.product_id}/dimensions`} className="productsubnav">Dimensions:</Link>
                            <Link to={`/product/${e.product_id}/reviews`} className="productsubnav">Reviews:</Link>
                        </div>
                        <div className="detailtab">{detailTab}</div>
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

export default connect(mapStateToProps, { getUserInfo, getProduct, getRedirect })(Product);