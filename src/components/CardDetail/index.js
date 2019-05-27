import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardDetail = props => {
  const { detail, getHouseImage } = props
  const houseImage = detail.house
  return (
    <Fragment>
      <div className='character__card-detail'>
        <h2 className='character__name'>{detail.name}</h2>
        <img className='character__picture' src={detail.image} alt={detail.name} />
        <ul>
          <li className='character__house'>
            <p>House: {detail.house === '' ? 'Unknown' : detail.house}</p>
            {detail.house ? <img src={getHouseImage (houseImage)} alt={detail.house}/> : ''}
          </li>
          <li className='character__yob'>
            <p>Year of Birth: {detail.yearOfBirth === '' ? 'Unknown' : detail.yearOfBirth}</p>
          </li>
          <li className='character__patronus'>
            <p>Patronus: {detail.patronus === '' ? 'Unknown' : detail.patronus}</p>
          </li>
          <li className='character__status'>
            <p>Status: {detail.alive === true ? 'Alive' : 'Dead'}</p>
          </li>
        </ul>
      </div>
      <Link to='/' className='link'>Go Back</Link>
    </Fragment>
  )
}

CardDetail.propTypes = {
  detail: PropTypes.object.isRequired
}

export default CardDetail
