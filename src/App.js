import React, { useState, useEffect } from 'react'

import BackgroundImage from './components/BackgroundImage'
import LaunchInfo from './components/LaunchInfo'
import Countdown from './Countdown'
import electron from './images/electron.png'
import atlas from './images/atlas_v.png'
import soyuz from './images/soyuz.png'
import falcon from './images/falcon.png'
import proton from './images/proton.png'

import './App.css'

const ROCKETSLIST = [
	{ id: 0, name: 'Electron', src: electron },
	{ id: 1, name: 'Atlas', src: './images/atlas_v.png' },
	{ id: 2, name: 'Soyuz', src: 'soyuz.png' },
	{ id: 3, name: 'Falcon', src: 'falcon.png' },
	{ id: 4, name: 'Proton / UR-500', src: 'proton.png' }
]

const App = () => {
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState('')
	const [rockets, setRockets] = useState(ROCKETSLIST)

	useEffect(() => {
		setLoading(true)
		fetch(`https://launchlibrary.net/1.3/launch/next/1`)
			.then(response => response.json())
			.then(launch => {
				const nextLaunch = launch.launches[0]
				setData(nextLaunch)
				setRockets(
					rockets.find(rocket => rocket.name === nextLaunch.rocket.familyname)
				)
			})
			.catch(error => {
				console.log(`There was a problem getting the launch data`, error)
			})
		setLoading(false)
	}, [])

	if (loading) {
		return <div>Loading...</div>
	}
	return (
		<div className='App'>
			<BackgroundImage loading={loading} image={rockets.src} />
			<LaunchInfo data={data} />
			<Countdown time={data.net} />
		</div>
	)
}

export default App
