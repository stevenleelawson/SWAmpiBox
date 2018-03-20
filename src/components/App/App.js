import React, { Component } from 'react';
import OverViewCrawl from '../OverViewCrawl/OverViewCrawl';
import './App.css';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardContainer from '../CardContainer/CardContainer';
// import dataCleaner from '../helper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starWars: null

    }
  }
  fetchSpecies = (starWars) => {
    console.log(starWars.results)
    const promises = starWars.results.map(person => {
      console.log('perosn',person.species)
      return fetch(person.species)
      .then(response => response.json())
      .then(data => ({name: person.species}))
    })
    return Promise.all(promises)
  }

  componentDidMount() {
    // .then(data => this.fetchBios(data.bio))

    const url = 'https://swapi.co/api/people/'
    fetch(url)
    .then(response => response.json())
    // .then( starWars => this.fetchSpecies(starWars))
    .then(starWars => this.setState({ starWars }))
    // .then(staff => this.setState({ staff }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lawson's SwampiBox</h1>
        </header>

        <OverViewCrawl />
        {
          this.state.starWars &&
          <CardContainer data={this.state.starWars} />
        }
        <ButtonContainer />
      </div>
    );
  }
}

export default App;
