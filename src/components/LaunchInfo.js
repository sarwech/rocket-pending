import React from 'react';

import '../App.css';

const LaunchInfo = props => {
    return (
        <div>
            <div className="mission-info">
                <h1>{props.data.name}</h1>
                <h2>{props.data.net}</h2>
            </div>
        </div>

    )
}

export default LaunchInfo;