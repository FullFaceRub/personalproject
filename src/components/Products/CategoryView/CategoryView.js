import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getRedirect } from '../../../ducks/reducer';


class CategoryView extends Component {
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
        let url = this.props.location.pathname
        this.props.getRedirect(url);
    }

    render() {

        let list = this.state.category.map((e, i) => {
            let formatTotal = Number(e.product_price) ? "$"+e.product_price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"): "$0.00";
            return <Link key={i} to={`/product/${e.product_id}`} className="ptile">
                <img src={e.product_image} alt={e.product_name} className="ptileimg" />
                <div className="ptilebody">
                    <h1>{e.product_name}<div className="line"></div></h1>
                    <p>{e.product_description}</p>
                </div>
                <div className="ptileprice">
                    <h1>{formatTotal}</h1>
                </div>
            </Link>
        })
        return (<div className="categoryView">
            <div className="catmain">
            <div className="backbutton">
            <Link to='/products'>Back to Categories<div className="line"></div></Link>
                </div>
                {list}
                <div className="cartfooter"></div>
            </div>
        </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        redirect: state.redirect
    }
}

export default connect(mapStateToProps, { getRedirect })(CategoryView);