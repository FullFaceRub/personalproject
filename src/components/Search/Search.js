import React, {Component} from 'react';
import mag from '../../images/magglass.png'

class Search extends Component{
    render(){
        return(
            <div className="search">
                <input placeholder="Search" className="searchbox"></input>
                <button className="searchbutton"><img src={mag} alt="Search" className="mag"/></button>
            </div>
        )
    }
}

export default Search;