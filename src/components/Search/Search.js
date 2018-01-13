import React, {Component} from 'react';
import mag from '../../images/magglass.png';
// import axios from 'axios';
import {Link} from 'react-router-dom';

class Search extends Component{
    constructor(props){
        super(props);

        this.state = {
            searchInput: '',
            // searchArray: []
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        // this.handleMagClick=this.handleMagClick.bind(this);
    }

    handleInputChange (e){
        this.setState ({
            searchInput:e
        })
    }

    // handleMagClick (){
    //     let param = this.state.searchInput
    //     axios.get('/api/product/:'+param)
    //     .then(res=>{
    //         this.setState ({
    //             searchInput: '',
    //             searchArray: res.data
    //         })
    //     })
    // }

    render(){
        let searchParam = this.state.searchInput
        return(
            <div className="search">
                <input placeholder="Search" className="searchbox" onChange={e=>this.handleInputChange(e.target.value)}></input>
                <Link to={`/search/results/${searchParam}`}><button className="searchbutton" onClick={this.handleMagClick}><img src={mag} alt="Search" className="mag"/></button></Link>
            </div>
        )
    }
}

export default Search;