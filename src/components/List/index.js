import React, { Component } from 'react'
import './styles.scss'
import Card from '../Card'

class List extends Component {
  render () {
    const { character } = this.props

    return (
      <ul className='character__list'>
        {character.map(char => {
          return (
            <li key={char.id} className='character'>
              <Card id={char.id} name={char.name} image={char.image} house={char.house} />
            </li>
          )
        })}
      </ul>
    )
  }
}

export default List
