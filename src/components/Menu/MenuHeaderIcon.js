import styled, {css} from 'styled-components';
import arrow_up from '../../images/arrow_up.png';

const MenuHeaderIcon = styled.i`
    width: 17px;
    height: 17px;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: bottom;
    background-image: url(${arrow_up});
    background-position: center;
     &:hover {
      cursor: pointer;
    }
    ${props => props.opened && css`
    transform: rotate(180deg);
  `}
`;

export default MenuHeaderIcon;
