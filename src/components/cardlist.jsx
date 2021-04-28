import React from 'react';
import Card from './MovieCard';

class Cardlist extends React.Component {
  render() {
    return (
      <div>
        <Card/>
        <Card/>
        <Card/>
      </div>
    );
  }
}
export default Cardlist;
