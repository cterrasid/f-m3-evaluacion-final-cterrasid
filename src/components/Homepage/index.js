import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import Filters from '../Filters'

const Homepage = props => {
  const { nameValue, handleNameFilter, character, loading } = props
  console.log('HOMEPAGE', props);
  
  return (
    <div>
      <header>Soy un header de HomePage</header>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <main>
          <Filters onChangeName={handleNameFilter} value={nameValue} />
          <List character={character} />
        </main>
      )}
      <footer>Soy un footer de Homepage</footer>
    </div>
  )
}

Homepage.propTypes = {
  //handleNameFilter: PropTypes.func.isRequired,
  character: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
}
export default Homepage
