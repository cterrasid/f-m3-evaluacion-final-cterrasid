import React from 'react'
import PropTypes from 'prop-types'

const Filters = props => {
  const { queryName, onChangeName } = props
  
  return (
    <form>
      <label id='filter-name'>Holi soy un input</label>
      <input 
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
