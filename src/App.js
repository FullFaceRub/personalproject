import React, { Component } from 'react';
import './reset.css';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import logo from './images/logo.png'

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="mainheader">
          <img src={logo} alt="logo" className="logo"/>
          <NavBar/>
          <Search/>
        </header>
        <section className="mainbody">
        </section>
        <footer className="mainfooter">
        </footer>
      </div>
    );
  }
}

export default App;
