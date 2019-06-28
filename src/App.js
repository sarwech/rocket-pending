import React, { Component } from 'react';

import BackgroundImage from './BackgroundImage';
import LaunchInfo from './LaunchInfo';
import Countdown from './Countdown'
import './App.css';

const ROCKETSLIST = [
  { id: 0, name: "Electron", src: './images/electron.jpg' },
  { id: 1, name: "Atlas", src: './images/atlas-v.jpg' },
  { id: 2, name: "", image: "" },
  { id: 3, name: "", image: "" },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ``,
      rockets: ROCKETSLIST,
    }
  }

  componentDidMount() {
    fetch(`https://launchlibrary.net/1.3/launch/next/1`)
    .then(response => response.json())
    .then(launch => {
      const nextLaunch = launch.launches[0];
      this.setState({
        data: nextLaunch,

        rockets: this.state.rockets.find(rocket => rocket.name === nextLaunch.rocket.familyname),
      });
    })
    .catch(error => {
      console.log(`There was a problem getting the launch data`, error);
    });
  }

  render() {
    return (
      <div className="App">
        <BackgroundImage image={this.state.rockets.src} />
        <LaunchInfo details={this.state} />
        <Countdown time={this.state.data} />
      </div>
    );
  }
}

export default App;
