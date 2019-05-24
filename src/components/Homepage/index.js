import React, { Component, Fragment } from 'react'
import List from '../List'

class Homepage extends Component {
  render () {
    const { character } = this.props
    return (
      <Fragment>
        <header>Soy un header de HomePage</header>
        <main>
          Soy un main de Homepage
          <label id='search'>Holi soy un input</label>
          <input name='search' />
          <List name={character.name} image={character.image} house={character.house} />
        </main>
        <footer>Soy un footer de Homepage</footer>
      </Fragment>
    )
  }
}

export default Homepage
