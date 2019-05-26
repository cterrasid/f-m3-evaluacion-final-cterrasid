import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class CardDetail extends Component {
  render () {
    const { match, character } = this.props
    // const characterId = match.params
    console.log('====================================')
    console.log(character, match)
    console.log('====================================')
    const item = character[match.params]
    console.log(item)

    return (
      <div>
        {item ? <h2>{item.name}</h2> : <h2>No hay datos</h2>}

        <p>el seleccionado es el</p>
        <Link to='/'>Volver</Link>
      </div>
    )
  }
}

CardDetail.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
  character: PropTypes.string.isRequired,
};

export default CardDetail
