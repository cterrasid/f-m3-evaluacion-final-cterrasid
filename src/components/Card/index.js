import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './styles.scss'

const Card = props => {

    const { id, name, image, house } = props

    return (
      <Link to={`/${id}`}>
        <article className='character__card-container'>
          <h2 className='character__name'>{name}</h2>
          <img className='character__picture' src={image} alt={name} />
          <p className='character__house'>{house}</p>
        </article>
      </Link>
    )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
};

export default Card
