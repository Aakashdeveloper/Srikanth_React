import React, { Component } from 'react';
import { BrowserRouter, Route, Swtich} from 'react-router-dom';

//From Container
import Home from '../container/Home'

//From Component
import Header from './Header';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Header/>
              <Route exact path="/" component={Home}/>
            <Footer/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
