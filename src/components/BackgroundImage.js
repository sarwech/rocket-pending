import React from 'react';

import '../App.css';

const BackgroundImage = props => {
    if (props.loading && props.image !== undefined) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="container">
          {console.log(props.image)}
          <img className="rocket-image" src={require(`../Electron.jpeg`)} alt="Rocket" />
        </div>
      );
    }
}

export default BackgroundImage;
