import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import Filters from '../Filters'
import './styles.scss'

const Homepage = props => {
  const { queryName, onChangeName, character, loading } = props
  
  return (
    <div>
      <header>Soy un header de HomePage</header>
      {loading ? (
        <p className='loading'>Loading...</p>
      ) : (
        <main>
          <Filters 
            queryName={queryName}
            onChangeName={onChangeName} 
          />
          <List 
            character={character}
            queryName={queryName} 
          />
        </main>
      )}
      <footer>Soy un footer de Homepage</footer>
    </div>
  )
}

Homepage.propTypes = {
  onChangeName: PropTypes.func.isRequired,
  queryName: PropTypes.string.isRequired,
  character: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
}

export default Homepage
