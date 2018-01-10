import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import BrandStory from './BrandStory/BrandStory';
import Contact from './Contact/Contact';

export default class About extends Component {
    render() {
        return (
            <div className="page">
                <div className='subnav'>
                    <Link to='/about' className='subnavlinks'>About</Link>
                    <Link to='/about/brandstory' className='subnavlinks'>Brand Story</Link>
                    <Link to='/about/contact' className='subnavlinks'>Contact</Link>
                </div>
                <div className='main'>
                    <Switch>
                        <Route exact path='/about' render={() => <div className='content'>
                            <h1 className='contenttitle'>About Bowers and Wilkins</h1>
                            <p>Bowers & Wilkins has a long history of technological innovation in its pursuit of the perfect loudspeaker. Whether it’s through the innovative use of materials such as Kevlar and Diamond, new solutions to complex engineering conundrums, or ‘eureka moments’ of brilliance, Bowers & Wilkins engineers constantly strive to produce the best possible sound.</p>
                        </div>} />
                        <Route path='/about/brandstory' component={BrandStory} />
                        <Route path='/about/contact' component={Contact} />
                    </Switch>
                </div>
            </div>
        )
    }
}