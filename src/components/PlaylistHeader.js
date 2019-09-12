import React, { Component } from 'react';
import styled from 'styled-components';
import dog from '../images/dog.jpg'
import car from '../images/car.png'


const PlaylistHeaderWrapper = styled.div`
    background-image: url(${dog}), linear-gradient(180deg, rgba(7, 41, 86, 0.12) 0%, #020916 100%);
    background-blend-mode: multiply;
    height: 277px;
    background-size: cover;
    position: relative;
    background-repeat: no-repeat;
    padding: 15px 32px 17px;
`;

const MainContentHeaderDesc = styled.div`
    position: absolute;
    top: 112px;
    left: 317px;
`;

const Title = styled.div`
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.23);
    color: #eeeeee;
    font-family: "Open Sans", sans-serif;
    font-size: 47px;
    font-weight: 700;
    letter-spacing: 0.19px;
`;

const Type = styled.div`
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.24);
    color: #c2c2c2;
    font-family: "Raleway Medium", sans-serif;
    font-size: 13px;
    font-weight: 500;
    letter-spacing: 1.22px;
    text-transform: uppercase;
`;

const Desc = styled.div`
    width: 201px;
    height: 25px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    color: #d6d6d6;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: 400;
    letter-spacing: 0.07px;
`;

const Img = styled.div`
    position: absolute;
    width: 225px;
    height: 225px;
    background-image: url(${car});
    left: 60px;
    top: 112px;
    z-index: 1;
`;

class PlaylistHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, desc} = this.props;
    return (
      <PlaylistHeaderWrapper>
        <MainContentHeaderDesc>
          <Type>Playlist</Type>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </MainContentHeaderDesc>
        <Img/>
      </PlaylistHeaderWrapper>
    );
  }
}

export default PlaylistHeader;
