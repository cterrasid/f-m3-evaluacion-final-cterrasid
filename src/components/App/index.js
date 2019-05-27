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
      isLoading: true,
      queryName: ''
    }
    this.handleNameFilter = this.handleNameFilter.bind(this)
    this.getCardDetails = this.getCardDetails.bind(this)
  }
  componentDidMount () {
    this.getCharacters()
  }

  getCharacters () {
    fetchCharacters().then(data => {
      const newCharacterList = data.map((item, index) => {
        return { ...item, id: index + 1 }
      })

      this.setState({
        characterList: newCharacterList,
        isLoading: false
      })
    })
  }

  handleNameFilter (e) {
    const inputNameValue = e.currentTarget.value

    this.setState({
      queryName: inputNameValue
    })
  }

  getCardDetails (id) {
    const characterList = this.state.characterList
    return characterList.find(item => item.id === parseInt(id))
  }

  render () {
    const { characterList, isLoading, queryName } = this.state

    if (isLoading) {
      return <p className='loading'>Loading...</p>
    }

    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Homepage
                onChangeName={this.handleNameFilter}
                queryName={queryName}
                character={characterList}
                loading={isLoading}
              />
            )}
          />
          <Route
            path='/card/:id'
            render={routerProps => <CardDetail detail={this.getCardDetails(routerProps.match.params.id)} />}
          />
        </Switch>
      </div>
    )
  }
}

export default App
