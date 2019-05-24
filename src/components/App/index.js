import React, { Component } from 'react'
import Homepage from '../Homepage'
import './styles.scss'
const URL = 'http://hp-api.herokuapp.com/api/characters'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      character: [],
      isLoading: true
    }

    this.getCharacters()
  }

  getCharacters () {
    fetch(URL)
      .then(res => res.json())
      .then(char => {
        const newCharacter = char.map((item, index) => {
          return {...item, id: `char-${index+1}`};
        });

        this.setState({
          character: newCharacter,
          isLoading: false, 
        })
      });
  }

  render () {
    console.log(this.state.character);
    
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }
        
    return (
      <div>Holi soy App
        <Homepage character={this.state.character} />
      </div>
    )
  }
}

export default App
