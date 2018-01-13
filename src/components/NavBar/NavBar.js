import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {getUserInfo} from '../../ducks/reducer';
import axios from 'axios';

class NavBar extends Component {

    componentDidMount(){
        this.props.getUserInfo()
    }

    // launchAuth(){
    //     axios.get('/auth')
    // }
    render() {
        const user = this.props.user
        //if session user is present, show session user name and route to user profile component on click
        //if session user is not present, show login link
        //set both of these to single variable to be rendered depending on condition
        return (
            <div>
                <nav className="navbar">

                    <Link to='/' className="navlinks">Home<div className="line"></div></Link>
                    <Link to='/about' className="navlinks">About<div className="line"></div></Link>
                    <Link to='/inspiration' className="navlinks">Inspiration<div className="line"></div></Link>
                    <Link to='/products' className="navlinks">Products<div className="line"></div></Link>
                    <a href={process.env.REACT_APP_LOGIN} className="navlinks">Login<div className="line"></div></a>

                </nav>
        
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {getUserInfo})(NavBar);