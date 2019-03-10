import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {API_HOST} from "../config";
import axios from "axios";
import Loader from "react-loader-spinner";
import Playlist from "../components/Playlist";
import { Link } from "react-router-dom";


class Playlists extends Component {
  constructor(props) {
    super(props);
    this.getData = this.getData.bind(this);
    this.state = {
      playlists: [],
      isLoading: true,
      errorText: '',
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData() {
    this.setState({ errorText: '' });
    const url = `${API_HOST}/playlists`;
    axios.get(url)
      .then((response) => {
        const playlists = response.data;
        this.setState({ playlists, isLoading: false });
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
    const { playlists, isLoading, errorText } = this.state;
    return (
      <div>
        {isLoading && (
          <Loader
            type="Ball-Triangle"
            color="#00BFFF"
            height="100"
            width="100"
          />
        )}
        {errorText && (
          <div>
            {errorText}
            {' '}
            <button type="button" onClick={this.getData}>Try again!</button>
          </div>
        )}
        {/* todo: вынести в отдельный компонент */}
        {playlists.map((list)=> {
          return (
            <div key={list.id}>
              <Link to={`/playlists/${list.id}`}>
                {list.title}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Playlists;
