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
import PlayingSong from '../components/Player/PlayingSong';
import PlayerControls from '../components/Player/PlayerControls';
import PlayerSoundControls from '../components/Player/PlayerSoundControls';
import PlayerLine from '../components/Player/PlayerLine';

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
    overflow: hidden;
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
  }

  render() {
    return (
      <Router>
        <Layout>
          <LayoutTop>
            <LayoutSidebar>
              <SideBar>
                <Menu title='Navigation' body={<Header/>}/>
                <Menu title='Playlists' body={<Playlists/>}/>
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
            <LayoutSidebar>
              <SideBar>
              </SideBar>
            </LayoutSidebar>
          </LayoutTop>
          <LayoutFooter>
              <Player>
                <PlayerLine/>
                <PlayingSong/>
                <PlayerControls/>
                <PlayerSoundControls/>
              </Player>
          </LayoutFooter>
        </Layout>
      </Router>
    );
  }
}

export default App;
