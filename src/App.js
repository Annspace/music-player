import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Loader from 'react-loader-spinner';
import Playlist from './components/Playlist';


class App extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      isLoading: true,
      errorText: '',
    };
  }

  componentDidMount() {
    axios.get('http://176.57.217.40:3000/tracks')
      .then((response) => {
        const songs = response.data;
        this.setState({ songs, isLoading: false });
      })
      .catch((error) => {
        this.setState({ isLoading: false });
        if (error.response) {
          switch (error.response.status) {
            case 404:
              this.setState({ errorText: `Ooops 404 ${error.response.statusText}` });
              break;
            default:
              this.setState({ errorText: `Oops ${error.response.status} ${error.response.statusText}` });
              break;
          }
        }
      });
  }

  render() {
    const { songs, isLoading, errorText } = this.state;
    return (
      <div className="App">
        {isLoading && (
        <Loader
          type="Ball-Triangle"
          color="#00BFFF"
          height="100"
          width="100"
        />
        ) }
        {errorText && <div>{errorText}</div>}
        <Playlist songs={songs} />
      </div>
    );
  }
}

export default App;
