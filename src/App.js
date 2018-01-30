import React, { Component } from 'react';
import './reset.css';
import './App.css';
import './media1199.css';
import './media991.css';
import './media768.css';
import 'animate.css/animate.min.css';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import logo from './images/logo.png';
import ham from './images/hamburger6.jpg';
import routes from './routes';



class App extends Component {
  constructor() {
    super();

    this.state = {
      dropdown: "dropdown"
    }

    this.toggleExpand = this.toggleExpand.bind(this);
  }

  toggleExpand() {
    let drop = this.state.dropdown == "dropdown" ? "dropdownexpanded" : "dropdown"
    this.setState({
      dropdown: drop
    })
  }

  render() {
    return (
      <div className="app">
        {/* {aos.init()} */}
        <header className="mainheader">
          <div className="logoouter">
            <img src={logo} alt="logo" className="logo" />
            <div className="wave"></div>
          </div>
          <img src={ham} alt="menu" className="hammenu" onClick={this.toggleExpand} />
          <div className="navbarouter">
            <NavBar />
          </div>
          <div className="searchouter">
            <Search />
          </div>
        </header>
        <div className={this.state.dropdown}>
          <Search />
          <NavBar />
        </div>
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
