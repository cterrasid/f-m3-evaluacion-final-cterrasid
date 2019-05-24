import React, { Component, Fragment } from 'react'

class Filters extends Component {
  render () {
    return (
      <Fragment>
        <label id='search'>Holi soy un input</label>
        <input name='search' onChange={this.props.handleInputChange}/>
      </Fragment>
    )
  }
}

export default Filters
