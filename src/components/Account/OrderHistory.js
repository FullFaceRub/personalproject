import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import axios from 'axios';


class OrderHistory extends Component {
    constructor(){
        super();

        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        let user = this.props.user.customer_id
        this.props.getUserInfo();
        // this.props.getOrderHistory(user)
        axios.get('api/orderhistory',{user: user}).then((history)=>{
            this.setState({
                orders: history
            })
        })
    }

    render() {
        let orders = this.state.orders
        let user = this.props.user
        let ordersMap;
        if (!user) {
            ordersMap = <h1>Please <a href={process.env.REACT_APP_LOGIN} className="navlinks">Login<div className="line"></div></a> in order to view your account</h1>
        } else {
            ordersMap = orders.map((e, i) => {
                return <div key={i} className="ordertile">
                    <div>{e.invoice_id}</div>
                    <div>{e.invoicedate}</div>
                    <div>{e.total}</div>
                    <div>
                        <div>{e.invoicelines.product_image}</div>
                        <div>{e.invoicelines.product_name}</div>
                        <div>{e.invoicelines.quantity}</div>
                        <div>{e.invoicelines.product_price}</div>
                    </div>
                </div>
            })
        }

        return (
            <div>{ordersMap}</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserInfo})(OrderHistory);