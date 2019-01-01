import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import {latestNews, otherNews, latestGallery} from '../actions';

//Component
import LatestNews from '../components/home/Latest'
import OtherNews from '../components/home/Other';
import Gallery   from '../components/home/Gallery'

class Home extends Component{

    componentDidMount(){
        this.props.latestNews();
        this.props.otherNews();
        this.props.latestGallery();
    }

    render(){
        return(
            <div>
                <LatestNews latest={this.props.articles.latest}/>
                <OtherNews   other={this.props.articles.other}/>
                <Gallery gallery={this.props.gallery.gallery}/>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        articles: state.articles,
        gallery: state.gallery
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({latestNews, otherNews, latestGallery}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps) (Home);