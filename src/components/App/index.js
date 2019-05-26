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
      filters: {
        nameValue: ''
      }
    }
    this.handleNameFilter = this.handleNameFilter.bind(this)
  }

  componentDidMount () {
    this.getCharacters()
  }

  getCharacters () {
    fetchCharacters().then(data => {
      const newCharacterList = data.map((item, index) => {
        return { ...item, id: index }
      })

      this.setState({
        characterList: newCharacterList,
        isLoading: false
      })
    })
  }

  handleNameFilter (e) {
    this.setState(state =>{
      return {
        ...state,
        filters:{
          nameValue: e.target.value
        }
      }
    })
  }
  
  render () {
    const { characterList, isLoading, nameValue} = this.state
    console.log('APP', this.state);
    if (isLoading) {
      return <p className='loading'>Loading...</p>
    }

    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => <Homepage onChangeName={this.handleNameFilter} value={nameValue} character={characterList} loading={isLoading} />}
        />
        <Route
          path='/card/:id'
          render={routerProps => <CardDetail match={routerProps.match} character={characterList} />}
        />
      </Switch>
    )
  }
}

export default App
