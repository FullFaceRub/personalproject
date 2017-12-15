import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './Products.css';

export default class About extends Component {
    render() {
        return (
            <div className="page">
                <div className='subnav'>
                    <Link to='/speakers' className='subnavlinks'>Speakers</Link>
                    <Link to='/wireless-speakers' className='subnavlinks'>Wireless Speakers</Link>
                    <Link to='/headphones' className='subnavlinks'>Headphones</Link>
                    <Link to='/car-audio' className='subnavlinks'>Car Audio</Link>
                </div>
                <div className='main'>
                    <Switch>
                        <Route path='/speakers' component={Speakers} />
                        <Route path='/wireless-speakers' component={WirelessSpeakers} />
                        <Route path='/headphones' component={Headphones} />
                        <Route path='/car-audio' component={CarAudio} />
                    </Switch>
                </div>
            </div>
        )
    }
}