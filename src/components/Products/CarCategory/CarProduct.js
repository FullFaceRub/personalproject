import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo, getProduct, getRedirect, getCart } from '../../../ducks/reducer';
import { Link } from 'react-router-dom';

class Product extends Component {
    constructor(){
        super();

        this.googlesearch=this.googlesearch.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo();
        let product = this.props.match.params.product
        this.props.getProduct(product);
        let url = this.props.location.pathname
        this.props.getRedirect(url);
    }

    googlesearch(){
        window.location.assign(`https://www.google.com/search?q=${this.props.product.product_name}`)
    }

    render() {
        let productMap = this.props.product.map((e, i) => {
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
                    <button className="dealerbutton" onClick={this.googlesearch()}>Find a Dealership Near You</button>
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