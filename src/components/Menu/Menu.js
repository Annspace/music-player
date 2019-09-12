import React, {Component} from 'react';
import styled from 'styled-components';
import MenuHeader from './MenuHeader';
import MenuHeaderIcon from './MenuHeaderIcon';

const MenuWrapper = styled.div`
    margin-bottom: 33px;
`;

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showItems: true,
    };
    this.toggle = this.toggle.bind(this);
  };

  toggle() {
    const {showItems} = this.state;
    this.setState({
      showItems: !showItems,
    });
  }

  render() {
    const {title, body} = this.props;
    const {showItems} = this.state;
    return(
      <MenuWrapper>
        <MenuHeader>
          <span>{title}</span>
          <MenuHeaderIcon opened={showItems}  onClick={this.toggle}/>
        </MenuHeader>
        {showItems && body}
      </MenuWrapper>
    );
  }
}

export default Menu;
