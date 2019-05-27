import React from 'react'
import PropTypes from 'prop-types';
import './styles.scss'
import Card from '../Card'

const List = props => {

    const { character, queryName, getHouseImage } = props

    return (
      <ul className='character__list'>
        {character
        .filter(item => item.name.toLowerCase().includes(queryName.toLowerCase()))
        .map(item => {
          return (
            <li key={item.id}>
              <Card id={item.id} name={item.name} image={item.image} house={item.house} getHouseImage={getHouseImage} status={item.alive}/>
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
