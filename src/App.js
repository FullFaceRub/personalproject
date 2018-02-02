import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './media1440.css';
import './media1250.css';
import './media1199.css';
import './media1137.css';
import './media1047.css';
import './media991.css';
import './media981.css';
import './media881.css';
import './media768.css';
import './media558.css';
import './media480.css';
import './media425.css';
import './media375.css';
import 'animate.css/animate.min.css';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import MobileNav from './components/NavBar/MobileNav';
import logo from './images/logo.png';
import ham from './images/hamburger6.jpg';
import routes from './routes';
import {Link, withRouter} from 'react-router-dom';
import {mobSlide} from './ducks/reducer';
import {connect} from 'react-redux';



class App extends Component {
  constructor(){
    super()
    this.toggleSlide = this.toggleSlide.bind(this);
  }
  
  toggleSlide(props){
    this.props.mobSlide()
  }

  render() {
    return (
      <div className="app">
        <section className="mainbody">
          {routes}
        </section>
        <footer className="mainfooter">
        </footer>
        <header className="mainheader">
          <Link to="/" className="logoouter">
            <img src={logo} alt="logo" className="logo" />
            <div className="wave"></div>
          </Link>
          <NavBar />
          <Search />
          <button onClick={_=>this.toggleSlide()} className="hammenubutton" >
          <img src={ham} alt="menu" className="hammenu"  />
          </button>
        </header>
        <div className="hamdisplay">
          <MobileNav />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    slide: state.slide
  }
}

export default withRouter(connect(mapStateToProps, {mobSlide})(App));
