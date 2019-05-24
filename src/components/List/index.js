import React, { Component } from 'react'

class List extends Component {
  render () {
    const { character } = this.props

    return (
        <ul>
            {character.map(char => {
              return (
                <li>
                  <h2>{char.name}</h2>
                  <img src={char.image} alt={char.name} />
                  <p>{char.house}</p>
                </li>
              )
            })}
          </ul>
    )
  }
}

export default List
