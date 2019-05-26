import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardDetail = props => {
  const { match, character } = props
  // const characterId = match.params
  const item = character[match.params]

  return (
    <Fragment>
      <div className='character__card-detail'>
        <h2 className='character__name'>{item.name}</h2>
        <img className='character__picture' src={item.image} alt={item.name} />
        <p className='character__house'>{item.house}</p>
      </div>
      <Link to='/'>Volver</Link>
    </Fragment>
  )
}

CardDetail.propTypes = {
  match: PropTypes.object.isRequired,
  character: PropTypes.array.isRequired
}

export default CardDetail
