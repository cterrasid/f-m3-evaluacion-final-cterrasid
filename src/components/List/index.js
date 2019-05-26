import React from 'react'
import PropTypes from 'prop-types';
import './styles.scss'
import Card from '../Card'

const List = props => {

    const { character } = props

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
  };

List.propTypes = {
  character: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List
