import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getSearch} from '../../ducks/reducer';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router';

class SearchResults extends Component {

    componentDidMount(){
        let query = this.props.match.params.param
        this.props.getSearch(query)
    }

    componentWillReceiveProps(nextProps){
        let nextQuery = nextProps.match.params.param
        this.props.getSearch(nextQuery)
    }

    render (){
        let resultslist = this.props.search.map((e,i)=>{
            return <Link key={i} to={`/product/${e.product_id}`} className="ptile">
                <img src={e.product_image} alt={e.product_name} className="ptileimg" />
                <div className="ptilebody">
                    <h1>{e.product_name}<div className="line"></div></h1>
                    <p>{e.product_description}</p>
                </div>
                <div className="ptileprice">
                    <h1>${e.product_price}</h1>
                </div>
            </Link>
        })
        return (
            <div className="pmain">
                {resultslist}
                <div className="cartfooter"></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        search: state.search
    }
}

export default withRouter(connect(mapStateToProps, {getSearch})(SearchResults));