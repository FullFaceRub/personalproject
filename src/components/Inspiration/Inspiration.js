import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getRedirect} from '../../ducks/reducer';

class Inspiration extends Component {
    constructor(){
        super();

        this.state = {
            inspiration: []
        }
    }
    componentDidMount(){
        axios.get('/api/inspiration').then(res=>{
            this.setState({
                inspiration:res.data
            })
        })
        let url = this.props.location.pathname
        this.props.getRedirect(url);
    }

    render() {
        let bricks = this.state.inspiration.map((e,i)=>{
            return <img key={i} src={e.inspiration_url} alt={e.inspiration_id} className="inspirationbrick" />
        })
        return (<div className="inspirationouter">
            <div className="inspiration">
                {bricks}
            </div>
            <div className="cartfooter">
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        redirect: state.redirect
    }
}

export default connect(mapStateToProps, {getRedirect})(Inspiration);