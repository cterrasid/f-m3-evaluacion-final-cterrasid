import React, { Component, Fragment } from 'react';

class Card extends Component {
  render () {
    return (
      <Fragment>
        <h2>{this.props.name}</h2>
        <img src={this.props.image} alt={this.props.name} />
        <p>{this.props.house}</p>
      </Fragment>
    )
  }
}

export default Card;
