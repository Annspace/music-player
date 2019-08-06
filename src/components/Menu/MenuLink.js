import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'current';

const MenuLink = styled(NavLink).attrs({
  activeClassName: activeClassName,
  exact: true,
})`
  color: #a9a9a9;
  :hover {
    color: #dcdcdc;  
  }
  &.${activeClassName},
  &.${activeClassName}:hover
   {
    color: #ffffff;
  }
`;

export default MenuLink;
