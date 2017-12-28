import React, { Component } from 'react';
import axios from 'axios';
// import ProductTile from './ProductTile';
import { Link } from 'react-router-dom';

export default class CategoryView extends Component {
    constructor() {
        super();

        this.state = {
            category: []
        }
    }
    componentDidMount() {
        let products = this.props.match.params.category
        axios.get('/api/products/' + products).then(res => {
            this.setState({
                category: res.data
            })
        }
        )
    }
    render() {

        let list = this.state.category.map((e, i) => {
            console.log(e);
            return <Link key={i} to={`/product/${e.product_id}`} className="ptile">
                <img src={e.product_image} alt={e.product_name} className="ptileimg" />
                <div className="ptilebody">
                    <h1>{e.product_name}</h1>
                    <p>{e.product_description}</p>
                </div>
                <div className="ptileprice">
                    <h1>{e.product_price}</h1>
                    <button>Add to cart</button>
                </div>
            </Link>
        })
        return (
            <div className="pmain">
                {list}
            </div>
        )
    }
}