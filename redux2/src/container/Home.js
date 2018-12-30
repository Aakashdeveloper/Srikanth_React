import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import {latestNews} from '../actions';

//Component
import LatestNews from '../components/home/Latest'

class Home extends Component{

    componentDidMount(){
        this.props.latestNews();
    }

    render(){
        return(
            <div>
                <LatestNews latest={this.props.articles.latest}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        articles: state.articles
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);