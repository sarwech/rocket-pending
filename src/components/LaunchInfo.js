import React, { Component } from 'react';

import '../App.css';

class LaunchInfo extends Component {
    render() {
        return (
            <div>
                <div className="mission-info">
                    <h1>{this.props.details.data.name}</h1>
                    <h2>{this.props.details.data.net}</h2>
                </div>
            </div>

        )
    }
}

export default LaunchInfo;