import React, { Component, Fragment } from 'react';
import List from '../List';
import Filters from '../Filters';

class Homepage extends Component {
  render () {
    const { character } = this.props
    return (
      <Fragment>
        <header>Soy un header de HomePage</header>
        <main>
          <Filters filterName={this.props.handleInputChange} value={this.props.value}/>
          <List character={character} />
        </main>
        <footer>Soy un footer de Homepage</footer>
      </Fragment>
    )
  }
}

export default Homepage
