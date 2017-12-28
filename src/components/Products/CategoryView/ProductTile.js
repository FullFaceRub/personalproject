import React, { Component } from 'react';
import axios from 'axios';

export default class ProductTile extends Component {
    constructor() {
        super();

        this.state = {
            img: '',
            title: '',
            desc: '',
            price: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(props) {
        axios.get('/api/product/' + this.props.product).then(res => {
            this.setState({
                img: res.data.product_image,
                title: res.data.product_name,
                desc: res.data.product_description,
                price: res.data.product_price
            })
        })
    }

    render() {
        let img = this.state.img;
        let title = this.state.title;
        let desc = this.state.desc;
        let price = this.state.price;

        return (
            <div className="ptile">
                <img src={img} alt={title} className="ptileimg" />
                <div className="ptilebody">
                    <h1>{title}</h1>
                    <p>{desc}</p>
                </div>
                <div className="ptileprice">
                    <h1>{price}</h1>
                    <button>Add to cart</button>
                </div>
            </div>
        )
    }
}