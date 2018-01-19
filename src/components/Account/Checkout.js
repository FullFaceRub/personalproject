import React, { Component } from 'react';
import Modal from 'react-modal';
import { getUserInfo, getCart } from '../../ducks/reducer';
import { connect } from 'react-redux';
import axios from 'axios';
import stripe from '../../stripeKey';
import StripeCheckout from 'react-stripe-checkout';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: 'black',
        color: 'silver',
        height: '425px',
        width: '750px',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        borderRadius: '25px',
        animationName: 'fadeIn',
        animationDuration: '.6s'
    }

};

class Checkout extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            email: '',
            phone: ''
        }
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleAddress = this.handleAddress.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleZipCode = this.handleZipCode.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePhone = this.handlePhone.bind(this);
    }

    componentDidMount() {
        let user = this.props.user.customer_id;
        this.props.getUserInfo();
        this.props.getCart(user);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        this.subtitle.style.color = 'silver';
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }

    handleName(e) {
        this.setState({
            name: e
        })
    }

    handleAddress(e) {
        this.setState({
            address: e
        })
    }

    handleCity(e) {
        this.setState({
            city: e
        })
    }

    handleState(e) {
        this.setState({
            state: e
        })
    }

    handleZipCode(e) {
        this.setState({
            zipCode: e
        })
    }

    handleEmail(e) {
        this.setState({
            email: e
        })
    }

    handlePhone(e) {
        this.setState({
            phone: e
        })
    }

    onToken = (token) => {
        token.card = void 0;
        axios.post('/api/payment', {
            token,
            amount: this.props.cart[1][0].total,
            user: this.props.user.customer_id,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zipCode: this.state.zipCode,
            total: this.props.cart[1][0].total,
            email: this.state.email,
            phone: this.state.phone,
            cart: this.props.cart[0]
        }).then(response => {
            alert('we are in business');
        });
    }

    render() {
        let user = this.props.user.customer_name
        let cart = this.props.cart;
        let total = cart[1].length < 1 ? 0 : cart[1][0].total;
        let {name,address,city,state,zipCode,email,phone} = this.state
        const isEnabled = name.length>0 
        && address.length>0 
        && city.length>0
        && state.length>0
        && zipCode.length>0
        && email.length>0
        && phone.length>0;

        return (
            <div>
                <button disabled={cart[1].length===0} onClick={this.openModal} className="checkoutbutton">Checkout</button>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.state.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Please fill out your information:">
                    <div className="closeouter">
                        <button className="close" onClick={this.closeModal}>>close<div className="line"></div></button>
                    </div>
                    <h2 className="subtitle">Shipping information</h2>

                    <div className="checkOutForm">
                        <div className="field" ><h5>Your Name:</h5><input onChange={e => this.handleName(e.target.value)} value={user} id="name"></input></div>
                        <div className="field" ><h5>Street Address:</h5><input onChange={e => this.handleAddress(e.target.value)} value={this.state.address} id="address"></input></div>
                        <div className="subCheckOutForm">
                            <div className="field" ><h5>City:</h5><input onChange={e => this.handleCity(e.target.value)} value={this.state.city} id="city"></input></div>
                            <div className="field" ><h5>State:</h5><input onChange={e => this.handleState(e.target.value)} value={this.state.state} id="state"></input></div>
                            <div className="field" ><h5>Zip Code:</h5><input onChange={e => this.handleZipCode(e.target.value)} value={this.state.zipCode} id="zipcode"></input></div>
                        </div>
                        <div className="field" ><h5>Email:</h5><input onChange={e => this.handleEmail(e.target.value)} value={this.state.email} id="name"></input></div>
                        <div className="field" ><h5>Phone Number:</h5><input onChange={e => this.handlePhone(e.target.value)} value={this.state.phone} id="state"></input></div>
                    </div>
                    <div className="paybuttonouter">
                        <div className="checkouttotal">Total: ${total}</div>
                        <div  className="paybutton">
                            <StripeCheckout
                                name={'Your Order'}
                                description={'Please enter your card information:'}
                                token={this.onToken}
                                stripeKey={stripe.pub_key}
                                amount={total * 100}
                                disabled={!isEnabled}
                                className = "stripe"
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        cart: state.cart,
    }
}

export default connect(mapStateToProps, { getUserInfo, getCart })(Checkout)