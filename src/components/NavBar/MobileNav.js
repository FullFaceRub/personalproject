import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo, getRedirect, getCart } from '../../ducks/reducer';
import mag from '../../images/magglass.png';
import cart from '../../images/carticon.png';

class MobileNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInput: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleMagClick = this.handleMagClick.bind(this);
    }
    componentDidMount() {
        let user = this.props.user.customer_id;
        this.props.getUserInfo();
        this.props.getCart(user);
    }

    handleInputChange(e) {
        this.setState({
            searchInput: e
        })
    }

    handleMagClick() {
        this.setState({
            searchInput: ''
        })
    }

    // componentWillReceiveProps(nextProps){
    //     let slide = nextProps.slide ? "mobnav slide" : "mobnav";
    //     console.log(nextProps.slide);
    // }

    render() {
        const user = this.props.user
        const redirect = this.props.redirect
        let accountLink = null;
        let searchParam = this.state.searchInput
        let slide = this.props.slide ? "mobnav slide" : "mobnav";
        let search = this.props.slide ? "mobsearch mobchild slide" : "mobsearch mobchild";
        let links = this.props.slide ? "mobnavlinks mobchild slide" : "mobnavlinks mobchild";
        let account = this.props.slide ? "account mobchild slide" : "account mobchild";
        let counter = 0;
        let cartArr = this.props.cart[0];

        for (var i = 0; i < cartArr.length; i++) {
            counter += cartArr[i].quantity
        }

        if (!user.auth_id) {
            accountLink = <a href={process.env.REACT_APP_LOGIN + '?redirectto=' + redirect} className={links}>Login<div className="line"></div></a>
        } else {
            accountLink = <div className={account}>
                <Link to='/account' className="navlinks">Your Account<div className="line"></div></Link>
                <Link to="/account/cart" className="cartcontainer"><img src={cart} alt="cart" className="cart" />
                    <div className="cartCirc">
                        <div className="cartNum">{counter}</div>
                    </div>
                </Link>
            </div>
        }

        return (
            <nav className={slide}>
                <form className={search}>
                    <input placeholder="Search" className="searchbox" onChange={e => this.handleInputChange(e.target.value)} value={this.state.searchInput}></input>
                    <Link to={`/search/results/${searchParam}`}><button className="searchbutton"
                        onClick={this.handleMagClick}
                    ><img src={mag} alt="Search" className="mag" /></button></Link>
                </form>
                <Link to='/' className={links}>Home<div className="line"></div></Link>
                <Link to='/about' className={links}>About<div className="line"></div></Link>
                <Link to='/inspiration' className={links}>Inspiration<div className="line"></div></Link>
                <Link to='/products' className={links}>Products<div className="line"></div></Link>
                {accountLink}
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        redirect: state.redirect,
        cart: state.cart,
        slide: state.slide
    }
}

export default connect(mapStateToProps, { getUserInfo, getRedirect, getCart })(MobileNav);