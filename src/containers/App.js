import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Header from '../components/Header';
import Feed from "./Feed";
import Radio from "./Radio";
import Playlists from './Playlists';
import Playlist from './Playlist';
import Help from "./Help";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={Feed}/>
          <Route path="/radio" component={Radio}/>
          <Route exact path="/playlists" component={Playlists}/>
          <Route path="/playlists/:id" component={Playlist}/>
          <Route path="/help" component={Help}/>
        </div>
      </Router>
    );
  }
}

export default App;
