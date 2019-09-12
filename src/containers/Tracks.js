import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Error from '../components/Error';
import Track from '../components/Track';
import PlaylistHeader from '../components/PlaylistHeader';
import Table from '../components/Table/Table';
import TableHeader from '../components/Table/TableHeader';
import { getTracks } from '../actions';

const TableWrapper = styled.div`
  height: 600px;
  overflow-y: scroll;
`;


class Tracks extends Component {
  componentDidMount() {
    const playlistId = this.props.match.params.id;
    const { getData } = this.props;
    getData(playlistId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const playlistId = this.props.match.params.id;
      const { getData } = this.props;
      getData(playlistId);
    }
  }

  render() {
    const { tracksItems, isLoading, errorText } = this.props;
    const title = 'Queen';
    const desc = 'Cool album';
    return (
      <>
        <PlaylistHeader title={title} desc={desc}/>
        {errorText && <Error errorText={errorText} />}
        <TableWrapper>
          <Table>
            <colgroup>
              <col style={{width:'40px'}}/>
              <col style={{width:'40px'}}/>
              <col/>
              <col style={{width:'370px'}}/>
              <col style={{width:'60px'}}/>
            </colgroup>
            <thead>
              <tr>
                <TableHeader>&nbsp;</TableHeader>
                <TableHeader>&nbsp;</TableHeader>
                <TableHeader>Title</TableHeader>
                <TableHeader>Artist</TableHeader>
                <TableHeader>Duration</TableHeader>
              </tr>
            </thead>
            <tbody>
                {
                  tracksItems.map((track) => {
                    const {
                      id, title, artist, duration,
                    } = track;
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
            </tbody>
          </Table>
        </TableWrapper>
        </>
    );
  }
}

Tracks.propTypes = {
  getData: PropTypes.func.isRequired,
  tracksItems: PropTypes.instanceOf(Array).isRequired,
  isLoading: PropTypes.bool.isRequired,
  errorText: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  tracksItems: state.tracks.tracksItems,
  isLoading: state.tracks.isLoading,
  errorText: state.tracks.errorText,
});
const mapDispatchToProps = dispatch => ({
  getData: id => dispatch(getTracks(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tracks);
