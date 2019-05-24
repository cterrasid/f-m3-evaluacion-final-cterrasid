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
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  getCharacters () {
    fetch(URL)
      .then(res => res.json())
      .then(char => {
        const newCharacter = char.map((item, index) => {
          return { ...item, id: `char-${index + 1}` }
        })

        this.setState({
          character: newCharacter,
          isLoading: false
        })
      })
  }

  handleInputChange(event){
    const inputValue = event.target.value;
    console.log('input', inputValue);
    
  }

  render () {
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }

    return <Homepage character={this.state.character} />
  }
}

export default App
