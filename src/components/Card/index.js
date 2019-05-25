import React, { Component } from 'react'
import './styles.scss'

class Card extends Component {
  render () {
    const { name, image, house } = this.props
    return (
      <div className='character__card-container'>
        <h2 className='character__name'>{name}</h2>
        <img className='character__picture' src={image} alt={name} />
        <p className='character__house'>{house}</p>
      </div>
    )
  }
}

export default Card
