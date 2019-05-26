import React from 'react'
import PropTypes from 'prop-types';
import './styles.scss'
import Card from '../Card'

const List = props => {

    const { character, queryName } = props

    return (
      <ul className='character__list'>
        {character
        .filter(item => item.name.includes(queryName))
        .map(item => {
          return (
            <li key={item.id} className='character'>
              <Card id={item.id} name={item.name} image={item.image} house={item.house} />
            </li>
          )
        })}
      </ul>
    )
  };

List.propTypes = {
  character: PropTypes.arrayOf(PropTypes.object).isRequired,
  queryName: PropTypes.string.isRequired,
};

export default List
