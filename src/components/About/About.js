import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import BrandStory from './BrandStory/BrandStory';
import Contact from './Contact/Contact';
import './About.css';

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
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod eu lorem et ultricies. In porta lorem at dui semper porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet ultrices nisl. Nam in pharetra odio, ac blandit metus. Suspendisse potenti. Praesent elementum diam non orci cursus rutrum. Pellentesque condimentum ultrices dignissim. Sed a tempor ligula, vel luctus sapien. Mauris vehicula rutrum massa. Duis condimentum, ex quis ullamcorper rhoncus, erat libero tempor arcu, condimentum facilisis tellus lectus ut nunc. Pellentesque vitae faucibus diam. Vestibulum eu erat ex. Ut justo neque, varius aliquet erat vel, scelerisque convallis lacus. Mauris semper lorem mauris, sed dignissim eros consectetur nec.</p>
                        </div>} />
                        <Route path='/about/brandstory' component={BrandStory} />
                        <Route path='/about/contact' component={Contact} />
                    </Switch>
                </div>
            </div>
        )
    }
}