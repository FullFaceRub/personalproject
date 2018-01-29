import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getRedirect} from '../../ducks/reducer';

class Inspiration extends Component {
    constructor(){
        super();

        this.state = {
            inspiration: [
            '/inspiration/1.jpg'
            ,'/inspiration/2.jpg'
            ,'/inspiration/3.jpg'
            ,'/inspiration/4.jpg'
            ,'/inspiration/5.jpg'
            ,'/inspiration/6.jpg'
            ,'/inspiration/7.jpg'
            ,'/inspiration/8.jpg'
            ,'/inspiration/9.jpg'
            ,'/inspiration/10.jpg'
            ,'/inspiration/11.jpg'
            ,'/inspiration/12.jpg'
            ,'/inspiration/13.jpg'
            ,'/inspiration/14.jpg'
            ,'/inspiration/15.jpg'
            ,'/inspiration/16.jpg'
            ,'/inspiration/17.jpg'
            ,'/inspiration/18.jpg'
            ,'/inspiration/19.jpg'
            ,'/inspiration/20.jpg'
            ,'/inspiration/21.jpg'
            ,'/inspiration/22.jpg'
            ,'/inspiration/23.jpg'
            ,'/inspiration/25.jpg'
            ,'/inspiration/24.jpg'
        ]
        }
    }
    componentDidMount(){
        let url = this.props.location.pathname
        this.props.getRedirect(url);
    }

    render() {
        let bricks = this.state.inspiration.map((e,i)=>{
            return <img key={i} src={e} alt={e.inspiration_id} className="inspirationbrick" />
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