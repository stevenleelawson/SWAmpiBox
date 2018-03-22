import React, { Component } from 'react';
import OverViewCrawl from '../OverViewCrawl/OverViewCrawl';
import './App.css';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import CardContainer from '../CardContainer/CardContainer';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starWars: []

    }
  }
  fetchHomeworld = (starWars) => {
    const promises = starWars.map(person => {
      return fetch(person.homeworld)
      .then(response => response.json())
      .then(data => ({...person, homeworld: data.name, population: data.population }))
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
  getPeople = () => {
    const url = 'https://swapi.co/api/people/'
    fetch(url)
    .then(response => response.json())
    .then( species => this.fetchSpecies(species))
    .then( homeworld => this.fetchHomeworld(homeworld))
    .then(starWars => this.setState({  starWars }))
  }
  componentDidMount() {
    // this.getPeople()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWapiBox</h1>
        </header>
        <Route path='/' render={() => <OverViewCrawl />} />
        <Route path='/' render={() => <ButtonContainer getPeople={this.getPeople} />} />
        <Route exact path='/people' render={() => <CardContainer data={this.state.starWars}/>} />

      </div>
    );
  }
}

export default App;
