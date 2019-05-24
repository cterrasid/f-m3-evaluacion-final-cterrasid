
const URL = 'http://hp-api.herokuapp.com/api/characters'

const fetCharacters = () =>{
    fetch(URL)
      .then(res => res.json())
}

export default {fetCharacters}