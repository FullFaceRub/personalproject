import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo, getRedirect } from '../../ducks/reducer';
import Login from '../Account/Login';
import AccountLink from '../Account/AccountLink';
import mag from '../../images/magglass.png';

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
        this.props.getUserInfo();
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

    render() {
        const user = this.props.user
        const redirect = this.props.redirect
        let accountLink = null;
        let searchParam = this.state.searchInput

        if (!user.auth_id) {
            accountLink = <Login
                url={redirect}
            />
        } else {
            accountLink = <AccountLink />
        }

        return (
            <nav className="mobnav">
                <form className="mobsearch mobchild">
                    <input placeholder="Search" className="searchbox" onChange={e => this.handleInputChange(e.target.value)} value={this.state.searchInput}></input>
                    <Link to={`/search/results/${searchParam}`}><button className="searchbutton"
                        onClick={this.handleMagClick}
                    ><img src={mag} alt="Search" className="mag" /></button></Link>
                </form>
                <Link to='/' className="mobnavlinks mobchild">Home<div className="line"></div></Link>
                <Link to='/about' className="mobnavlinks mobchild">About<div className="line"></div></Link>
                <Link to='/inspiration' className="mobnavlinks mobchild">Inspiration<div className="line"></div></Link>
                <Link to='/products' className="mobnavlinks mobchild">Products<div className="line"></div></Link>
                {accountLink}
            </nav>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        redirect: state.redirect,
        cart: state.cart
    }
}

export default connect(mapStateToProps, { getUserInfo, getRedirect })(MobileNav);