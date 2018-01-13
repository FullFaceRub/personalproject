import React, { Component } from 'react';
import axios from 'axios';

export default class Product extends Component {
    constructor() {
        super();

        this.state = {
            product: []
        }
    }

    componentDidMount() {
        let product = this.props.match.params.product
        axios.get('/api/product/' + product).then(res => {
            this.setState({
                product: res.data
            })
            console.log(this.state.product);
        })
    }

    render() {
        let productMap = this.state.product.map((e, i) => {
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
                        <button>Add to cart</button>
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