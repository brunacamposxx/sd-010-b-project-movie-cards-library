// implement Rating component here
import React from 'react'; 

class Rating extends React.Component{
  render() {
    const { movie: { rating } } = this.props;
    return(
      <div>{ rating }</div>
    );
  }
}

export default Rating;
