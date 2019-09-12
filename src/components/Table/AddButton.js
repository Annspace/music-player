import styled from 'styled-components';
import plus from '../../images/plus_main.png';

const AddButton = styled.button`
    width: 15px;
    height: 15px;
    background-image: url(${plus});
    background-repeat: no-repeat;
    background-position: center;
    background-color: #020916;
    border: none;
    
    &:focus {
      outline:none;
    }
`;

export default AddButton;
