import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getUserInfo, getProduct} from '../../../../ducks/reducer';

class Product extends Component {
    constructor() {
        super();

        this.state = {
            quantity: null
        }
        this.addToCart=this.addToCart.bind(this);
        this.inputQuantity=this.inputQuantity.bind(this);
    }

    componentDidMount() {
        this.props.getUserInfo();
        let product = this.props.match.params.product
        this.props.getProduct(product);
    }
    
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
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
        axios.post(`/api/cart/${user.customer_id}/${product}/${quantity}`).then(res=>res.data)
        this.setState({
            quantity: null
        })
    }

    render() {
        console.log(this.props.product);
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
                        <input placeholder="Insert Quantity" onChange={e=>this.inputQuantity(e.target.value)}></input>
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
        product: state.product
    }
}

export default connect(mapStateToProps, {getUserInfo, getProduct})(Product);