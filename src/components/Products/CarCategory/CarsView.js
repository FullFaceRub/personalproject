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
        axios.get('/api/products/4').then(res => {
            console.log(res.data);
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
            return <Link key={i} to={`/product/caraudio/${e.product_id}`} className="ptile caraudiotile">
                <img src={e.product_image} alt={e.product_name} className="ptileimg" />
                <div className="ptilebody">
                    <h1>{e.product_name}<div className="line"></div></h1>
                    <p>{e.product_description}</p>
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