import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Posts from './components/posts';
import Profile from './components/profile';
import PostDetail from './components/postDetail';
import LifeCycle from './components/lifeCycle';


class App extends Component{
    render(){
        return(
            <div className="container">
                <div class="panel panel-primary">
                    <div class="panel-heading">Home Heading</div>
                    <div class="panel-body">Home Content</div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
        <div>
            <header>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span> 
                    </button>
                    <a className="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/posts">Posts</Link></li> 
                        <li> <Link to="/profile">Profile</Link></li> 
                        <li> <Link to="/lifecycle">Lifecycle</Link></li> 
                    </ul>
                    </div>
                </div>
            </nav>
            </header>
            <Route exact path="/" component={App}/>
            <Route exact path="/posts" component={Posts} />
            <Route path="/posts/:id" component={PostDetail}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/lifecycle" component={LifeCycle}/>
        </div>
    </BrowserRouter>
    , document.getElementById('root'));