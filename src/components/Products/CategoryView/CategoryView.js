import React, { Component } from 'react';
import axios from 'axios';
import ProductTile from './ProductTile';
import {Link} from 'react-router-dom';

export default class CategoryView extends Component {
    constructor(){
        super();

        this.state = {
            category: []
        }
    }
    componentDidMount(){
        let products = this.props.match.params.category
        console.log(this.props);
        axios.get('api/products/'+products).then(res=>{
            console.log(res)
            this.setState({
                category: res.data
            })}
        )
    }
    render() {
        let list = this.state.category.map((e,i)=>{
            return <Link key={i} to={`/product/:${e.product_id}`}><ProductTile/></Link>
        })
        let catName = this.state.category.category_name;
        return (
            <div>
                <h2>{catName}:</h2>
                {list}
                <p>hello world</p>
            </div>
        )
    }
}