import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'


class MoviesList extends Component {

  componentWillMount(){
    this.props.moviesList();
  }

renderMovies  = (movies) => {
  if(movies){
    return movies.map((data) => {
      return(
        <div key={data.id}>{data.name}</div>
      )
    })
  }
}

  render() {
    return (
     <div>
        {this.renderMovies(this.props.movies)}
      </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return{
    movies: state.films
  }
}

export default connect(mapStateToProps,actions) (MoviesList);
