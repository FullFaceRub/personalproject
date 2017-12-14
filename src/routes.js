import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import Inspiration from './components/Inspiration/Inspiration';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/products' component={Products}/>
        <Route path='/products/:product' component={Product}/>
        <Route path='/inspiration' component={Inspiration}/>
    </Switch>
)