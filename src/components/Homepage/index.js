import React, { Component } from 'react'
import PropTypes from 'prop-types';
import List from '../List'
import Filters from '../Filters'

class Homepage extends Component {
  render () {
    const { character, loading } = this.props
    return (
      <div>
        <header>Soy un header de HomePage</header>
        {loading ? (<p className='loading'>Loading...</p>) : 
        (<main>
            <Filters filterName={character.handleInputChange} value={character.value} />
            <List character={character} />
        </main>)}
        <footer>Soy un footer de Homepage</footer>
      </div>
    )
  }
}

Homepage.propTypes = {
  character: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.string.isRequired
}
export default Homepage
