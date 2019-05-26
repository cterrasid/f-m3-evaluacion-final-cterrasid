import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardDetail = props => {
  const { detail } = props
console.log('====================================');
console.log(props);
console.log('====================================');  
  return (
    <Fragment>
      <div className='character__card-detail'>
        <h2 className='character__name'>{detail.name}</h2>
        <img className='character__picture' src={detail.image} alt={detail.name} />
        <ul>
          <li className='character__house'>House: {detail.house}</li>
          <li className='character__yob'>Year of Birth: {detail.yearOfBirth}</li>
          <li className='character__patronus'>Patronus: {detail.patronus}</li>
          <li className='character__status'>Status: {detail.alive}</li>
        </ul>
      </div>
      <Link to='/'>Go Back</Link>
    </Fragment>
  )
}

CardDetail.propTypes = {
  detail: PropTypes.object.isRequired
}

export default CardDetail
