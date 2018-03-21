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
  // fetchPopulation = (starWars) => {
  //   const promises = starWars.map(person => {
  //     return fetch(person.homeworld)
  //     .then(response => response.json())
  //     .then(data => ({...person, population: data.population}))
  //   })
  //   return Promise.all(promises)
  // }
  fetchHomeworld = (starWars) => {
    const promises = starWars.map(person => {
      return fetch(person.homeworld)
      .then(response => response.json())
      .then(data => ({...person, homeworld: data.name }))
    })
    return Promise.all(promises)
  }
  fetchSpecies = (starWars) => {
    const promises = starWars.results.map(person => {
      return fetch(person.species)
      .then(response => response.json())
      .then(data => ({...person,  species: data.name}) )
      })
    return Promise.all(promises)
  }
  componentDidMount() {
    // .then(data => this.fetchBios(data.bio))

    const url = 'https://swapi.co/api/people/'
    fetch(url)
    .then(response => response.json())
    // .then( starWars => this.setState({ starWars: starWars }))
    .then( species => this.fetchSpecies(species))
    .then( homeworld => this.fetchHomeworld(homeworld))
    // .then( population => this.fetchPopulation(population))
    .then(starWars => this.setState({  starWars }))
    // .then(staff => this.setState({ staff }))
  }
  // fetchSpecies = (starWars) => {
  //   const promises = starWars.results.map( async person => {
  //     const response = await fetch(person.species)
  //     const data = await response.json()
  //     return {...data, species: person.species}
  //     // ({...data, name: staffMemeber.name}))
  //
  //   })
  //   return Promise.all(promises)
  // }
  // fetchBios = (staffArray) => {
  //   const promises = staffArray.map( async staffMemeber => {
  //     const response = await fetch(staffMemeber.info)
  //     const data = await response.json()
  //     return { ...data, name: staffMemeber.name }
  //   })
  //   return Promise.all(promises)
  // }

  // async componentDidMount() {
  //   // .then(data => this.fetchBios(data.bio))
  //
  //   const url = 'https://swapi.co/api/people/'
  //
  //   const response = await fetch(url)
  //   // .then( starWars => this.setState({ starWars: starWars }))
  //   const data = await response.json()
  //   const species = await this.fetchSpecies(species)
  //   this.setState({  species })
  //   // .then(staff => this.setState({ staff }))
  // }

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
