import React from 'react'
import PropTypes from 'prop-types'

const Filters = props => {
  const { queryName, onChangeName } = props
  
  return (
    <form className='filter-name'>
      <label id='filter-name'>Find by <strong>name</strong>: </label>
      <input
      className='input' 
      type='text' 
      name='filter-name' 
      onChange={onChangeName} 
      value={queryName} 
      placeholder='Ex: Harry Potter'/>
    </form>
  )
}

Filters.propTypes = {
  queryName: PropTypes.string.isRequired,
  onChangeName: PropTypes.func.isRequired,
}
export default Filters
