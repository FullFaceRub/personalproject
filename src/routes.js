import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Product from './components/Products/CategoryView/Product/Product';
import Inspiration from './components/Inspiration/Inspiration';
import CategoryView from './components/Products/CategoryView/CategoryView';
import axios from 'axios';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route exact path='/products' component={Products}/>
        <Route distinct path='/product/:product' component={Product}/>
        <Route path='/inspiration' component={Inspiration}/>
        <Route path='/products/:category' component={CategoryView} />
        {/* <Route path='/login' render={axios.get('/login')}/> */}
    </Switch>
)