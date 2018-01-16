import React, { Component } from 'react';
import axios from 'axios';

export default class Inspiration extends Component {
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