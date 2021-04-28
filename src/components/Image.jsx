import React from 'react';

class Image extends React.Component {
  render() {
    return <img className="img" src={ this.props.source } />;
  }
}

export default Image;
