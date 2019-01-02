import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

//From Container
import Home from '../container/Home';
import News from '../container/News';
import GalleryDetail from '../container/GalleryDetail';

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
              <Route exact path='/news/:id' component={News}/>
              <Route exact path="/galleries/:id" component={GalleryDetail}/>
            <Footer/>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
