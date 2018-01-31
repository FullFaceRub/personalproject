import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './media1250.css';
import './media1199.css';
import './media1137.css';
import './media1047.css';
import './media991.css';
import './media981.css';
import './media881.css';
import './media768.css';
import 'animate.css/animate.min.css';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import MobileNav from './components/NavBar/MobileNav';
import logo from './images/logo.png';
import ham from './images/hamburger6.jpg';
import routes from './routes';



class App extends Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     dropdown: "dropdown"
  //   }

  //   this.toggleExpand = this.toggleExpand.bind(this);
  // }

  // toggleExpand() {
  //   let drop = this.state.dropdown === "dropdown" ? "dropdownexpanded" : "dropdown"
  //   this.setState({
  //     dropdown: drop
  //   })
  // }

  render() {
    return (
      <div className="app">
        <section className="mainbody">
          {routes}
        </section>
        <footer className="mainfooter">
        </footer>
        <header className="mainheader">
          <div className="logoouter">
            <img src={logo} alt="logo" className="logo" />
            <div className="wave"></div>
          </div>
          <NavBar />
          <Search />
          <img src={ham} alt="menu" className="hammenu" />
        </header>
        <div className="dropdown">
          <MobileNav />
        </div>
      </div>
    );
  }
}

export default App;
