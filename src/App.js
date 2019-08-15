import React, { Component } from 'react';

import BackgroundImage from './components/BackgroundImage';
import LaunchInfo from './components/LaunchInfo';
import Countdown from './Countdown';
import './App.css';

const ROCKETSLIST = [
  { id: 0, name: 'Electron', src: './images/electron_1.jpg' },
  { id: 1, name: 'Atlas', src: './images/atlas-v.jpg' },
  { id: 2, name: 'Soyuz', src: 'soyuz' },
  { id: 3, name: 'Falcon', image: 'falcon' },
  { id: 4, name: 'Proton / UR-500', image: '../images/falcon.jpg' }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: ``,
      rockets: ROCKETSLIST
    };
  }

  async componentDidMount() {
    this.setState({
      loading: true
    })
    await fetch(`https://launchlibrary.net/1.3/launch/next/1`)
      .then(response => response.json())
      .then(launch => {
        const nextLaunch = launch.launches[0];
        this.setState({
          data: nextLaunch,
          rockets: this.state.rockets.find(
            rocket => rocket.name === nextLaunch.rocket.familyname
          )
        });
      })
      .catch(error => {
        console.log(`There was a problem getting the launch data`, error);
      });
    this.setState({
      loading: false,
    })
  }

  render() {
    if (this.state.loading) {

      return <div>Loading...</div>
    }
    return (
      <div className="App">
        <BackgroundImage loading={this.state.loading} image={`../Electron.jpeg`} />
        <LaunchInfo details={this.state} />
        <Countdown time={this.state.data.net} />
      </div>
    );
  }
}

export default App;
