import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import './styles.scss'

const Card = props => {

    const { id, name, image, status, house, getHouseImage } = props    

    return (
      <Link to={`/card/${id}`}>
        <article className='character__card-container'>
          <h2 className='character__name'>{name}</h2>
          <img className='character__picture' src={image} alt={name} />
          <img className='character__house' src={getHouseImage (house)} alt={house}/>
          <i className={status ? '' : 'fas fa-skull isdead'} />
        </article>
      </Link>
    )
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  getHouseImage: PropTypes.func.isRequired,
};

export default Card
