import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './styles.scss'

const CardDetail = props => {
  const { detail, getHouseImage } = props
  const houseImage = detail.house

  return (
    <Fragment>
      <div className='character-detail__container'>
        <h2 className='character-detail__name'>{detail.name}</h2>
        <img className='character-detail__picture' src={detail.image} alt={detail.name} />
        <ul className='characteristics'>
          <li className='character-detail__house'>
            <p><strong>House:</strong> {detail.house === '' ? 'Unknown' : detail.house}</p>
          </li>
          <li className='character-detail__yob'>
            <p><strong>Year of Birth:</strong> {detail.yearOfBirth === '' ? 'Unknown' : detail.yearOfBirth}</p>
          </li>
          <li className='character-detail__patronus'>
            <p><strong>Patronus:</strong> {detail.patronus === '' ? 'Unknown' : detail.patronus}</p>
          </li>
          <li className='character-detail__status'>
            <p><strong>Status:</strong> {detail.alive === true ? 'Alive' : 'Dead'}</p>
          </li>
        </ul>
        {detail.house ? <img className='character-detail__house-image' src={getHouseImage(houseImage)} alt={detail.house} /> : ''}
      </div>
      <Link to='/' className='link'>
        Go Back
      </Link>
    </Fragment>
  )
}

CardDetail.propTypes = {
  detail: PropTypes.object.isRequired
}

export default CardDetail
