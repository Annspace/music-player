import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Feed from './Feed';
import Radio from './Radio';
import Playlists from './Playlists';
import Tracks from './Tracks';
import Help from './Help';
import Menu from '../components/Menu/Menu';
import MenuHeader from '../components/Menu/MenuHeader';
import MenuHeaderIcon from '../components/Menu/MenuHeaderIcon';

const Layout = styled.div`
    width: 100%; 
    height: 100%;
    display: flex; 
    flex-direction: column; 
`;
const LayoutTop = styled.div`
    flex: 1;
    display: flex;
`;
const LayoutSidebar = styled.div`
    width: 300px; 
    display: flex;
`;
const LayoutMain = styled.div`
    flex: 1; 
    display: flex;
    overflow: auto;
`;
const MainContent = styled.div`
    flex: 1;
    position: relative;
    background-color: #020916;
`;
const SideBar = styled.div`
    background-image: linear-gradient(to top, #010b1e 0%, #020b1c 100%);
    opacity: 0.91;
    padding-left: 25px;
    padding-top: 30px;
    padding-right: 25px;
    flex: 1;
    overflow: auto;
`;

const LayoutFooter = styled.div`
    height: 96px;
`;

const Player = styled.div`
    background-image: linear-gradient(to top, #020814 0%, #030d20 100%);
    opacity: 0.98;
    flex: 1;
    padding: 21px 30px 21px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: true,
      showPlaylists: true,
    };
    this.toggleNavItems = this.toggleNavItems.bind(this);
    this.togglePlaylistsItems = this.togglePlaylistsItems.bind(this);
  }

  toggleNavItems() {
    const {showNav} = this.state;
    this.setState({
      showNav: !showNav,
    });
  };

  togglePlaylistsItems() {
    const {showPlaylists} = this.state;
    this.setState({
      showPlaylists: !showPlaylists
    });
  };

  render() {
    const {showNav, showPlaylists} = this.state;
    return (
      <Router>
        <Layout>
          <LayoutTop>
            <LayoutSidebar>
              <SideBar>
                <Menu>
                  <MenuHeader>
                    <span>Navigation</span>
                    <div onClick={this.toggleNavItems}>
                      <MenuHeaderIcon/>
                    </div>
                  </MenuHeader>
                  {showNav && <Header/>}
                </Menu>
                <Menu>
                  <MenuHeader>
                    <span>Playlists</span>
                    <div onClick={this.togglePlaylistsItems}>
                      <MenuHeaderIcon/>
                    </div>
                  </MenuHeader>
                  {showPlaylists && <Playlists/>}
                </Menu>
              </SideBar>
            </LayoutSidebar>
            <LayoutMain>
              <MainContent>
                <Route exact path="/" component={Feed}/>
                <Route path="/radio" component={Radio}/>
                <Route path="/playlists/:id" component={Tracks}/>
                <Route path="/help" component={Help}/>
              </MainContent>
            </LayoutMain>
          </LayoutTop>
          <LayoutFooter>
              <Player>
              </Player>
          </LayoutFooter>
        </Layout>
      </Router>
    );
  }
}

export default App;
