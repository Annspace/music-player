import React, {Component} from 'react';
import styled from 'styled-components';
import shuffle from '../../images/shuffle.png';
import pause from '../../images/pause.png';
import backward from '../../images/backward.png';
import forward from '../../images/forward.png';
import repeat from '../../images/repeat.png';
import ControlButton from './ControlButton';

const PlayerControlsWrapper = styled.div`
    width: 205px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #ffffff;
`;

const ShuffleButton = styled(ControlButton)`
    width: 15px;
    height: 11px;
    background-image: url(${shuffle});
`;

const PauseButton = styled(ControlButton)`
    background-image: url(${pause});
    width: 39px;
    height: 39px;
    border-radius: 50%;
    border: 1px solid #d4d4d4;
`;

const BackwardButton = styled(ControlButton)`
    width: 10px;
    height: 10px;
    background-image: url(${backward});
`;

const ForwardButton = styled(ControlButton)`
    width: 10px;
    height: 10px;
    background-image: url(${forward});
`;

const RepeatButton = styled(ControlButton)`
    width: 15px;
    height: 11px;
    background-image: url(${repeat});
`;

class PlayerControls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <PlayerControlsWrapper>
      <ShuffleButton/>
      <BackwardButton/>
      <PauseButton/>
      <ForwardButton/>
      <RepeatButton/>
    </PlayerControlsWrapper>
    );
  }
}

export default PlayerControls;
