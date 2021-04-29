import React from 'react';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <section className="movie-card-rating">
        <p className="rating">{ rating }</p>
      </section>
    );
  }
}

export default Rating;
