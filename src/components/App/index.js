import React, { Component } from 'react'
import { fetchCharacters } from '../../services/characterService'
import { Route, Switch } from 'react-router-dom'
import Homepage from '../Homepage'
import './styles.scss'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      characterList: [],
      isLoading: true
    }

    // this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentDidMount () {
    this.getCharacters()
  }

  getCharacters () {
    fetchCharacters().then(data => {
      const newCharacterList = data.map((item, index) => {
        return { ...item, id: `${index}${index + 1}` }
      })

      this.setState({
        characterList: newCharacterList,
        isLoading: false
      })
    })
  }

  // handleInputChange (event) {
  //   const inputValue = event.target.value
  //   this.setState({
  //     value: inputValue
  //   })

  // console.log('input', inputValue)
  // }

  render () {
    if (this.state.isLoading) {
      return <p>Loading...</p>
    }
    console.log(this.state.characterList)

    return (
      <Switch>
        <Route exact path='/' render={() => <Homepage character={this.state.characterList} />} />
      </Switch>
    )
  }
}

export default App
