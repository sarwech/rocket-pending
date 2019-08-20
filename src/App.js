import React, { useState, useEffect } from 'react';

import BackgroundImage from './components/BackgroundImage';
import LaunchInfo from './components/LaunchInfo';
import Countdown from './Countdown';
import './App.css';

const ROCKETSLIST = [
  { id: 0, name: 'Electron', src: './images/electron_1.jpg' },
  { id: 1, name: 'Atlas', src: './images/atlas-v.jpg' },
  { id: 2, name: 'Soyuz', src: 'soyuz.jpeg' },
  { id: 3, name: 'Falcon', src: 'falcon.jpeg' },
  { id: 4, name: 'Proton / UR-500', src: 'Electron.jpeg' }
];

const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState('');
  const [rockets, setRockets] = useState(ROCKETSLIST);

  useEffect(() => {
    setLoading(true);
    fetch(`https://launchlibrary.net/1.3/launch/next/1`)
      .then(response => response.json())
      .then(launch => {
        const nextLaunch = launch.launches[0];
        setData(nextLaunch);
        setRockets(
          rockets.find(rocket => rocket.name === nextLaunch.rocket.familyname)
        );
      })
      .catch(error => {
        console.log(`There was a problem getting the launch data`, error);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <BackgroundImage loading={loading} image={rockets.src} />
      <LaunchInfo data={data} />
      <Countdown time={data.net} />
    </div>
  );
};

export default App;
