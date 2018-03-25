import React, { Component } from 'react';
import OverViewCrawl from '../OverViewCrawl/OverViewCrawl';
import './App.css';
import ButtonContainer from '../ButtonContainer/ButtonContainer';
import PeopleCardContainer from '../PeopleCardContainer/PeopleCardContainer';
import VehiclesCardContainer from
  '../VehiclesCardContainer/VehiclesCardContainer';
import { Route } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import PlanetsCardContainer from '../PlanetsCardContainer/PlanetsCardContainer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      vehicles: [],
      planets: [],
      favorites: []

    };
  }
  toggleFavorites = (card) => {
    let favorites = [...this.state.favorites];
    const newFavorites = favorites.find(name => name.name === card.name);
    if (newFavorites) {
      favorites = favorites.filter( favorite => favorite.name !== card.name);
    } else {
      favorites.push(card);
    }

    this.setState({ favorites });

  }
  fetchResidents = (planets) => {
    const promises = planets.results.map(planet => {
      const residents = planet.residents.map(this.fetchResidentData);
      return Promise.all(residents).then(residents =>
        ({name: planet.name,
          terrain: planet.terrain,
          population: planet.population,
          climate: planet.climate,
          residents: residents}));
    });
    return Promise.all(promises);
  }

  fetchResidentData = resident => {
    return fetch(resident)
      .then(response => response.json())
      .then(data => data.name)
      .catch( error => alert(error));
  }
  getPlanets = () => {
    const url = 'https://swapi.co/api/planets/';
    fetch(url)
      .then(response => response.json())
      .then(data => this.fetchResidents(data))
      .then(planets => this.setState({ planets }))
      .catch( error => alert(error));
  }
  getVehicles = () => {
    const url = 'https://swapi.co/api/vehicles/';
    fetch(url)
      .then(response => response.json())
      .then(vehicles => this.setState({  vehicles }))
      .catch( error => alert(error));
  }
  fetchHomeworld = (starWars) => {
    const promises = starWars.map(person => {
      return fetch(person.homeworld)
        .then(response => response.json())
        .then(data => ({...person,
          homeworld: data.name,
          population: data.population }))
        .catch( error => alert(error));
    });
    return Promise.all(promises);
  }
  fetchSpecies = (starWars) => {
    const promises = starWars.results.map(person => {
      return fetch(person.species)
        .then(response => response.json())
        .then(data => ({...person,  species: data.name}) )
        .catch( error => alert(error));
    });
    return Promise.all(promises);
  }
  getPeople = () => {
    const url = 'https://swapi.co/api/people/';
    fetch(url)
      .then(response => response.json())
      .then( species => this.fetchSpecies(species))
      .then( homeworld => this.fetchHomeworld(homeworld))
      .then(people => this.setState({  people }))
      .catch( error => alert(error));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWapiBox</h1>
        </header>
        <Route path='/' render={() => <OverViewCrawl />} />
        <Route path='/' render={() =>
          <ButtonContainer
            getPeople={this.getPeople}
            getVehicles={this.getVehicles}
            getPlanets={this.getPlanets}
            favorites={this.state.favorites}
          />} />
        <Route exact path='/favorites' render={() =>
          <Favorites
            favorites={this.state.favorites}
            toggleFavorites={this.toggleFavorites}
          />} />
        <Route exact path='/people' render={() =>
          <PeopleCardContainer
            data={this.state.people}
            toggleFavorites={this.toggleFavorites}/>} />
        <Route exact path='/vehicles' render={() =>
          <VehiclesCardContainer
            data={this.state.vehicles}
            toggleFavorites={this.toggleFavorites}/>} />
        <Route exact path='/planets' render={() =>
          <PlanetsCardContainer
            data={this.state.planets}
            toggleFavorites={this.toggleFavorites}/>} />

      </div>
    );
  }
}


export default App;
