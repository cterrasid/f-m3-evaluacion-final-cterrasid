import React, { Component, Fragment } from 'react';
//import PropTypes from 'prop-types';
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

// Homepage.PropTypes = {
//   filterName: PropTypes.func,
//   value: PropTypes.string,
//   character: PropTypes.arrayOf(PropTypes.object),
// }
export default Homepage
