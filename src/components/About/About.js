import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Contact from './Contact/Contact';
import { connect } from 'react-redux';
import { getRedirect } from '../../ducks/reducer';
import './About.css';


class About extends Component {

    componentDidMount() {
        let url = this.props.location.pathname
        this.props.getRedirect(url);
    }

    render() {
        return (
            <div className="page">
                <div className='subnav'>
                    <Link to='/about' className='subnavlinks'>About<div className="line"></div></Link>
                    <Link to='/about/contact' className='subnavlinks'>Contact<div className="line"></div></Link>
                </div>
                <div className='main'>
                    <Switch>
                        <Route exact path='/about' render={() => <div className='content'>
                            <h1 className='contenttitle'>About Bowers and Wilkins</h1>
                            <p>Bowers & Wilkins has a long history of technological innovation in its pursuit of the perfect loudspeaker. Whether it’s through the innovative use of materials such as Kevlar and Diamond, new solutions to complex engineering conundrums, or ‘eureka moments’ of brilliance, Bowers & Wilkins engineers constantly strive to produce the best possible sound.</p>
                            <div className="timeline">
                                <div className="dot">1960</div>
                                <div className="dot">1961</div>
                                <div className="dot">1962</div>
                                <div className="dot">1963</div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>} />
                        <Route path='/about/contact' component={Contact} />
                    </Switch>
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

export default connect(mapStateToProps, { getRedirect })(About);