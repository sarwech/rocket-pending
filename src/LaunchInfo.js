import React, { Component } from 'react';

import './App.css';

class LaunchInfo extends Component {
    render() {
        return (
            <div>
                <div className="mission-info">
                    <h1>{console.log(this.props.details.data.rocket)}</h1>
                    <h2>{this.props.details.data.net}</h2>
                </div>
            </div>

        )
    }
}

export default LaunchInfo;