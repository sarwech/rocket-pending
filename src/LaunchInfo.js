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
                <div className="countdown">
                    <div className="datetime-column">
                        <h3>{this.props.details.countdown.days}</h3>
                        <h4>Days</h4>
                    </div>
                    <div className="datetime-column">
                        <h3>{this.props.details.countdown.hours}</h3>
                        <h4>Hours</h4>
                    </div>
                    <div className="datetime-column">
                        <h3>{this.props.details.countdown.minutes}</h3>
                        <h4>Mins</h4>
                    </div>
                    <div className="datetime-column">
                        <h3>{this.props.details.countdown.seconds}</h3>
                        <h4>Secs</h4>
                    </div>
                </div>
            </div>

        )
    }
}

export default LaunchInfo;