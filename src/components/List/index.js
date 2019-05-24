import React, { Component, Fragment } from 'react'
import Card from '../Card'

class List extends Component {
  render () {
    const { character } = this.props;

    return (
      <Fragment>
        <ul className='character__list'>
          {character.map(char => {
            return (
              <li key={char.id} className='character'>
                <Card id={char.id} name={char.name} image={char.image} house={char.house} />
              </li>
            )
          })}
        </ul>
      </Fragment>
    )
  }
}

export default List
