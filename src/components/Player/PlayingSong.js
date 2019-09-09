import React, {Component} from 'react';
import styled from 'styled-components';
import AddButton from '../Table/AddButton';
import Link from 'react-router-dom/es/Link';
import artist from '../../images/artist.png';

const AlbumImage = styled.img`
    width: 54px;
    height: 54px;
    margin-left: 15px;
    margin-right: 15px;
    vertical-align: middle;
`;

const PlayingSongInfo = styled.div`
    display: inline-block;
    vertical-align: middle;
    margin-right: 19px;
`;

const PlayingSongOwner = styled(Link)`
    color: #ababab;
    font-family: "Raleway Semi Bold", sans-serif;
    font-size: 15px;
    font-weight: 600;
    display: block;
`;

const PlayingSongTitle = styled(Link)`
    color: #787878;
    font-family: "Raleway Semi Bold", sans-serif;
    font-size: 13px;
    font-weight: 600;
    display: block;
`;

class PlayingSong extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <AddButton/>
        <AlbumImage src={artist}/>
        <PlayingSongInfo>
          <PlayingSongOwner to = '#'>
            Develerle Yaşıyorum
          </PlayingSongOwner>
          <PlayingSongTitle to = '#'>
            Gaye Su Akyol
          </PlayingSongTitle>
        </PlayingSongInfo>
      </div>
    );
  }
}

export default PlayingSong;
