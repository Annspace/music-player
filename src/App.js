import React, { Component } from 'react';
import './App.css';
import Playlist from './components/Playlist/index';


class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1, title: 'У самого синего моря', artist: 'Утёсов', duration: 2,
        },
        {
          id: 2, title: 'Hop', artist: 'Eminem', duration: 5,
        }],
    };
  }

  render() {
    const { songs } = this.state;
    return (
      <div className="App">
        <Playlist songs={songs} />
      </div>
    );
  }
}

export default App;
