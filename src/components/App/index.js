import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { fetchCharacters } from '../../services/characterService'
import Homepage from '../Homepage'
import CardDetail from '../CardDetail'
import './styles.scss'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      characterList: [],
      isLoading: true
    }
  }

  componentDidMount () {
    this.getCharacters()
  }

  getCharacters () {
    fetchCharacters().then(data => {
      const newCharacterList = data.map((item, index) => {
        return { ...item, id: index}
      })

      this.setState({
        characterList: newCharacterList,
        isLoading: false
      })
    })
  }

  render () {
    const { characterList, isLoading } = this.state
    if (isLoading) {
      return <p className='loading'>Loading...</p>
    }

    return (
      <Switch>
        <Route exact path='/' render={() => <Homepage character={characterList} loading={isLoading} />} />
        <Route path='/card/:id' render={routerProps => <CardDetail match={routerProps.match} character={characterList}/>} />
      </Switch>
    )
  }
}

export default App
