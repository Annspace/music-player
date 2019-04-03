import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from '../components/Header';
import Feed from './Feed';
import Radio from './Radio';
import Playlists from './Playlists';
import Tracks from './Tracks';
import Help from './Help';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Feed} />
          <Route path="/radio" component={Radio} />
          <Route exact path="/playlists" component={Playlists} />
          <Route path="/playlists/:id" component={Tracks} />
          <Route path="/help" component={Help} />
        </div>
      </Router>
    );
  }
}

export default Main;
