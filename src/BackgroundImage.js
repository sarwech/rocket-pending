import React, { Component } from 'react';

import './App.css';

class BackgroundImage extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="container">
                <img className="rocket-image" src={this.props.image} alt="Rocket" />
            </div>
        )

    }
}

export default BackgroundImage;