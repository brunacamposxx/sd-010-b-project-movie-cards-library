import React from 'react';

export default class MovieCard extends React.Component {
  render() {
    const { movieCardInfo } = this.props;
    //   title: 'Kingsglaive',
    //   subtitle: 'Final Fantasy XV',
    //   storyline: 'King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire\'s plans to steal the sacred crystal.',
    //   rating: 4.5,
    //   imagePath: 'images/Kingsglaive_Final_Fantasy_XV.jpg',
    
    return (
      <section>
        <h4>{ movieCardInfo.title }</h4>
        <h5>{ movieCardInfo.subtitle }</h5>
        <p>{ movieCardInfo.storyline }</p>
        <img src= {movieCardInfo.imagePath} alt={movieCardInfo.name}/>
        <p>{ movieCardInfo.rating }</p>
      </section>

    );
  }
}
