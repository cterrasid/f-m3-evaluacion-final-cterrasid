import React from 'react'
// import PropTypes from 'prop-types'

const Filters = props => {
  const { onChangeName, nameValue } = props
  console.log('FILTERS', props);
  
  return (
    <form>
      <label id='filter-name'>Holi soy un input</label>
      <input type='text' name='filter-name' onChange={onChangeName} value={nameValue} placeholder='Ex: Harry Potter'/>
    </form>
  )
}
Filters.propTypes = {
  //onChangeName: PropTypes.func.isRequired
}
export default Filters
