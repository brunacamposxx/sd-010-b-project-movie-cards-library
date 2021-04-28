// implement Rating component here
import React from  'react';
import PropTypes from 'prop-types'

class Rating extends React.Component {
  render() {
    return (
      <section className='rating'>{ this.props.rating }</section>
    )
  }
}

Rating.propTypes = {
	rating: PropTypes.number.isRequired,
}

export default Rating;
