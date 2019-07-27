import React, { Component } from 'react';

import './App.css';

class BackgroundImage extends Component {
  render() {
    return (
      <div className="container">
        {console.log(this.props.image)}
        <img className="rocket-image" src={this.props.image} alt="Rocket" />
      </div>
    );
  }
}

export default BackgroundImage;
