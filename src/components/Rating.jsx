import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;// a class é Rating e a prop é rating(aquilo que tá na prop movie no MovieCard)
    return (
      <div className="rating">{ rating }</div>
    );
  }
}
Rating.propTypes = {
  rating: PropTypes.number.isRequired, // essa foi a forma de fazer com apenas esse rating de proptype.Sem () ou {}
};
export default Rating;
