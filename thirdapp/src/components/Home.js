import React, {Component} from 'react';

import Banner from '../components/Banner';
import ArtistList from '../components/Artist_List';
import { REQ_URL } from '../constents/ApiUrl';

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            artist: ''
        }
    }

    componentDidMount(){
        fetch(REQ_URL,{
            method:'GET'
        })
        .then(response =>  response.json())
        .then(data => {
            this.setState({
                artist: data
            })
        })
    }

    render(){
        return(
            <div>
               <Banner></Banner>
               <ArtistList artistData={this.state.artist}></ArtistList>
            </div>
        )
    }
}


export default Home;