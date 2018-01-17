import React, { Component } from 'react';
import './reset.css';
import './App.css';
import 'animate.css/animate.min.css';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import logo from './images/logo.png';
import routes from './routes';



class App extends Component {
  
  render() {
    return (
      <div className="app">
        {/* {aos.init()} */}
        <header className="mainheader">
          <img src={logo} alt="logo" className="logo"/>
          <NavBar/>
          <Search/>
        </header>
        <section className="mainbody">
        {routes}
        </section>
        <footer className="mainfooter">
        </footer>
      </div>
    );
  }
}

export default App;
