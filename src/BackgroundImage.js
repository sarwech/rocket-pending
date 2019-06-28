import React, { Component } from 'react';

import image from './images/bg.jpg';
import './App.css';

class BackgroundImage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return <img className="rocket-image" src={image} alt="Rocket" />
    }
}

export default BackgroundImage;