import React, { Component } from 'react';
import axios from 'axios';
import { API_HOST } from '../config';
import Track from '../components/Track';

class Tracks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [],
      isLoading: true,
      errorText: '',
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    this.setState({ errorText: '' });
    const playlistId = this.props.match.params.id;
    const url = `${API_HOST}/playlists/${playlistId}`;
    axios.get(url)
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
      <div>
        {errorText && <div>{errorText}</div>}
        <div>
          {
            songs.map((song) => {
              const {
                id, title, artist, duration,
              } = song;
              return (
                <Track
                  key={id}
                  title={title}
                  artist={artist}
                  duration={duration}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Tracks;
