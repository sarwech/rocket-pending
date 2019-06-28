import React, { Component } from 'react';

import BackgroundImage from './BackgroundImage';
import LaunchInfo from './LaunchInfo.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: ``,
      countdown: {
        days: ``,
        hours: ``,
        minutes: ``,
        seconds: ``
      },
    }
  }

  getCountdown(launchTime) {
    let countdownTime = new Date("June 27, 2019 04:30:00").getTime();
    return setInterval(() => {
      let currentTime = new Date();
      let difference = countdownTime - currentTime;
      let d = Math.floor(difference / (1000 * 60 * 60 * 24));
      let h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let s = Math.floor((difference % (1000 * 60)) / 1000);
      let countdownTimer = `${d} Day ${h} Hours ${m} M ${s} S`;
      this.setState({
        countdown: {
          days: d,
          hours: h,
          minutes: m,
          seconds: s
        }
      })
    },1000)
  }

  componentDidMount() {
    fetch(`https://launchlibrary.net/1.3/launch/next/1`)
    .then(response => response.json())
    .then(launch => {
      this.setState({ data: launch.launches[0] });
      this.getCountdown(launch.launches[0].netstamp);
    })
    .catch(error => {
      console.log(`There was a problem getting the launch data`, error);
    })
  }

  render() {
    return (
      <div className="App">
        <BackgroundImage class="bg"/>
        <LaunchInfo details={this.state} />
      </div>
    );
  }
}

export default App;
