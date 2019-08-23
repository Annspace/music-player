import styled from 'styled-components';
import arrow_up from '../../images/arrow_up.png';

const MenuHeaderIcon = styled.i`
    width: 17px;
    height: 17px;
    background-repeat: no-repeat;
    display: inline-block;
    vertical-align: bottom;
    background-image: url(${arrow_up});
     &:hover {
      cursor: pointer;
    }
`;

export default MenuHeaderIcon;
