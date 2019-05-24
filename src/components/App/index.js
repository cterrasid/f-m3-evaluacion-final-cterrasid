import React, { Component } from 'react'
import './styles.scss'
import Homepage from '../Homepage'

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
      .then(char =>
        this.setState({
          character: char,
          isLoading: false
        })
      )
  }

  render () {
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }

    return <Homepage character={this.state.character} />
  }
}

export default App
