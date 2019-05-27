import React from 'react'
import PropTypes from 'prop-types'
import List from '../List'
import Filters from '../Filters'
import './styles.scss'

const Homepage = props => {
  const { queryName, onChangeName, getHouseImage, character, loading } = props
  
  return (
    <div>
      <header>Character Finder</header>
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
            getHouseImage={getHouseImage} 
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
