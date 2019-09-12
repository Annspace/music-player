import React, { Component } from 'react';
import styled from 'styled-components';

const PlayerLineWrapper = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    position: absolute;
    background-color: #747474;
    height: 4px;
`;

const PlayerLineActive = styled.div`
    height: 4px;
    border-radius: 2px;
    background-image: linear-gradient(270deg, #1ed761 0%, #1e64d7 100%);
    background-color: #020916;
    position: relative;
    width: 24%;
    &:after {
      display: block;
      content: '';
      border-radius: 50%;
      background-color: #ffffff;
      width: 15px;
      height: 15px;
      cursor: pointer;
      position: absolute;
      right: 0;
      bottom: -5px;
    }
`;

class PlayerLine extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <PlayerLineWrapper>
        <PlayerLineActive/>
      </PlayerLineWrapper>
    );
  }
}

export default PlayerLine;
