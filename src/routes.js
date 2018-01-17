import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Product from './components/Products/CategoryView/Product/Product';
import Inspiration from './components/Inspiration/Inspiration';
import CategoryView from './components/Products/CategoryView/CategoryView';
import SearchResults from './components/Search/SearchResults';
// import OrderHistory from './components/Account/OrderHistory';
import Cart from './components/Account/Cart';

export default (
    <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route exact path='/products' component={Products}/>
        <Route distinct path='/product/:product' component={Product}/>
        <Route path='/inspiration' component={Inspiration}/>
        <Route path='/products/:category' component={CategoryView} />
        <Route path='/account/cart' component={Cart}/>
        <Route exact path='/search/results/:param' component={SearchResults} />
    </Switch>
)