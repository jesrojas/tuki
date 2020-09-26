import React from 'react';
import { ThemeProvider, createTheme, SoundsProvider, createSounds, Arwes } from "arwes";
import Agents from './pages/agents/agents.component'
import Agent from './pages/agent/agent.component'
import Home from './pages/home/home.component'
import { Switch, Route } from 'react-router-dom'
import './App.css';

const mySounds = {
  shared: { volume: 1 }, // Shared sound settings
  players: {
    // The player settings
    click: {
      // With the name the player is created
      sound: { src: ["/sound/click.mp3"] }, // The settings to pass to Howler
    },
    typing: {
      sound: { src: ["/sound/typing.mp3"] },
      settings: { oneAtATime: true }, // The custom app settings
    },
    deploy: {
      sound: { src: ["/sound/deploy.mp3"] },
      settings: { oneAtATime: true },
    },
  },
};

const App = () => {
  return(
    <div className="main">
    <ThemeProvider theme={createTheme()}>
      <SoundsProvider sounds={createSounds(mySounds)}>
        <Arwes animate show 
              background={require('./images/background-large.jpg')}
              pattern={require('./images/glow.png')}
        >
          { anim => (
            <div>
              <Switch>
                  <Route exact path='/tuki' component={Home}/>
                  <Route exact path='/tuki/agents'>
                    <Agents anim={anim}/>
                  </Route>
                  <Route path='/tuki/agents/:agentName' render={props => (<Agent {...props}/>)}/>
              </Switch>
            </div>
          )}
        </Arwes>
      </SoundsProvider>
    </ThemeProvider>
    </div>
  )
};
export default App;
