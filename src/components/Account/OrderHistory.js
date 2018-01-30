import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../ducks/reducer';
import axios from 'axios';


class OrderHistory extends Component {
    constructor() {
        super();

        this.state = {
            orders: [],
            expandId: null
        }
        this.toggleExpand=this.toggleExpand.bind(this);
    }

    componentDidMount() {
        let user = this.props.user.customer_id
        this.props.getUserInfo();
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

    toggleExpand (index){
        this.setState({
            expandId: this.state.expandId ? null:index
        })
    }

    render() {
        let orders = this.state.orders;
        let user = this.props.user;
        let ordersMap;
        if (user.length === 0) {
            ordersMap = <h1>Please <a href={process.env.REACT_APP_LOGIN} className="navlinks">Login<div className="line"></div></a> in order to view your account</h1>
        } else {
            ordersMap = orders.map((e, i) => {
                let linesMap;
                let shortDate = e.invoiceDate.slice(0,10)
                let month = shortDate[5] + shortDate[6];
                let day = shortDate[8] + shortDate[9];
                let year = shortDate[0]+shortDate[1]+shortDate[2]+shortDate[3]
                let formatDate = month+'/'+day+'/'+year
                let orderTotal = Number(e.total) ? "$"+e.total.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"): "$0.00";
                linesMap = e.invoicelines.map((x, y) => {
                    let linePrice = Number(x.price) ? "$"+x.price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"): "$0.00";
                    return <div key={y} className="orderLine">
                        <div><img src={x.image} alt={x.product} className="orderimg"/></div>
                        <div>{x.product}</div>
                        <div>{linePrice}</div>
                        <div>{x.quantity}</div>
                    </div>
                })
                var expanded = this.state.expandId === i ? "orderDetExpanded":"orderDet"
                return <div key={i} className="eachOrder" onClick={()=>this.toggleExpand(i)}>
                    <div className="initOrder">
                        <div>{e.invoiceNumber}</div>
                        <div>{formatDate}</div>
                        <div>{orderTotal}</div>
                    </div>
                    <div className={`${expanded}`}>
                        {linesMap}
                    </div>
                </div>
            })
        }

        return (
            <div>
                <div className="ordertable">
                    <div>Order Number:</div><div>Order Date:</div><div>Order Total:</div>
                    </div>
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