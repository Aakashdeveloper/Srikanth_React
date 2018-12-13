import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header';
import JSON from './db.json';
import NEWSLIST from './components/news_list';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            news: JSON
        }
    }
    render(){
        return(
            <div>
                <Header></Header>
                <NEWSLIST newsdata={this.state.news}></NEWSLIST>
            </div>
        ) 
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));


/*
const App = () => (
        <div>
            <h1>Hii to react</h1>
            <h2>Using Functional component</h2>
        </div>
) 
*/