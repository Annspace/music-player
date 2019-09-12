import styled from 'styled-components';
import play from '../../images/play.png';

const PlayButton = styled.button`
    width: 35px;
    height: 35px;
    background-image: url(${play});
    background-repeat: no-repeat;
    background-position: center;
    background-color: #020916;
    border-radius: 50%;
    border: 1px solid #d4d4d4;
    
    &:focus {
      outline:none;
    }
`;

export default PlayButton;
