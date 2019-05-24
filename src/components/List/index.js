import React, { Component } from 'react'
import Card from '../Card'

class List extends Component {
  render () {
    const { character } = this.props

    return (
      <ul>
        {character.map(char => {
          return (
            <li key={char.id}>
              <Card id={char.id} name={char.name} image={char.image} house={char.house} />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default List
