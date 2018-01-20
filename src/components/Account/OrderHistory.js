import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import axios from 'axios';


class OrderHistory extends Component {
    constructor() {
        super();

        this.state = {
            orders: []
        }
    }

    componentDidMount() {
        let user = this.props.user.customer_id
        this.props.getUserInfo();
        // this.props.getOrderHistory(user)
        axios.get(`api/orderhistory/${user}`).then((history) => {
            this.setState({
                orders: history.data
            })
        })
    }

    componentWillReceiveProps(nextProps){
        let user = nextProps.user.customer_id;
        this.props.getUserInfo();
        axios.get(`api/orderhistory/${user}`).then((history) => {
            this.setState({
                orders: history.data
            })
        })
    }

    render() {

        let orders = this.state.orders;
        let user = this.props.user;
        let ordersMap;
        if (user.length == 0) {
            ordersMap = <h1>Please <a href={process.env.REACT_APP_LOGIN} className="navlinks">Login<div className="line"></div></a> in order to view your account</h1>
        } else {
            ordersMap = orders.map((e, i) => {
                let linesMap;
                linesMap = e.invoicelines.map((x, y) => {
                    return <div key={y} className="orderLine">
                        <div><img src={x.image} alt={x.product} className="orderimg"/></div>
                        <div>{x.product}</div>
                        <div>${x.price}</div>
                        <div>{x.quantity}</div>
                    </div>
                })
                return <div key={i} className="eachOrder">
                    <div className="initOrder">
                        <div>{e.invoiceNumber}</div>
                        <div>{e.invoiceDate}</div>
                        <div>{e.total}</div>
                    </div>
                    <div className="orderDet">
                        {linesMap}
                    </div>
                </div>
            })
        }

        return (
            <div>
                {ordersMap}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { getUserInfo })(OrderHistory);