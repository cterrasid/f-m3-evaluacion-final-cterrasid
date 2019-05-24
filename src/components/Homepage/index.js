import React, { Component, Fragment } from 'react'

class Homepage extends Component {
  render () {
      const {character} = this.props;
    return (
      <Fragment>
        <header>Holi Homepage</header>
        <main>
          <ul>{character.map((data) => (<li>{data.name}</li>))}</ul>
        </main>
        <footer></footer>
      </Fragment>
    )
  }
}

export default Homepage
