import React, {Component} from 'react';
import styled from 'styled-components';
import ControlButton from './ControlButton';
import device from '../../images/devices.png';
import volume from '../../images/volume.png';

const DevicesButton = styled(ControlButton)`
    width: 16px;
    height: 13px;
    background-image: url(${device});
    margin-right: 21px;
`;

const VolumeButton = styled(ControlButton)`
    width: 14px;
    height: 12px;
    background-image: url(${volume});
    margin-right: 9px;
`;

const VolumeLine = styled.div`
    width: 72px;
    height: 4px;
    border-radius: 2px;
    background-color: #b3b3b3;
    display: inline-block;
    vertical-align: middle;
`;

class PlayerSoundControls extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <DevicesButton/>
        <VolumeButton/>
        <VolumeLine/>
      </div>
    );
  }
}

export default PlayerSoundControls;
