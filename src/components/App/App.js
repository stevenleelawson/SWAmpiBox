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
    console.log('card', card);
    console.log('favssss', this.state.favorites)
    let favorites = [...this.state.favorites];
    const newFavorites = favorites.find(name => name.name === card.name)
    if (newFavorites) {
      favorites = favorites.filter( favorite => favorite.name !== card.name)
    } else {
      favorites.push(card)
    }

    this.setState({ favorites })
    // const favArray = this.state.favorites;
    // this.state.favorites.filter((favorite, index) => {
    //   return favorite.name === card.name
    // }).length ? favArray.pop(card) : favArray.push(card); this.setState({  favorites: favArray })

  }
  removeFavorites = (card) => {
    const favArray = this.state.favorites;
    const removeArray = this.state.favorites;
    this.state.favorites.filter(favorite => favorite.name !== card.name); this.setState({ favorites: removeArray })

  }
  fetchResidents = (planets) => {
    const promises = planets.results.map(planet => {
      const residents = planet.residents.map(this.fetchResidentData)
    return Promise.all(residents).then(residents =>
    ({name: planet.name,
     terrain: planet.terrain,
     population: planet.population,
     climate: planet.climate,
     residents: residents}))
    })
    return Promise.all(promises)
  }

  fetchResidentData = resident => {
    return fetch(resident)
    .then(response => response.json())
    .then(data => data.name)
  }
  getPlanets = () => {
    const url = 'https://swapi.co/api/planets/'
    fetch(url)
      .then(response => response.json())
      .then(data => this.fetchResidents(data))
      .then(planets => this.setState({ planets }))

  }
  getVehicles = () => {
    const url = 'https://swapi.co/api/vehicles/'
    fetch(url)
    .then(response => response.json())
    // .then( species => this.fetchSpecies(species))
    // .then( homeworld => this.fetchHomeworld(homeworld))
    .then(vehicles => this.setState({  vehicles }))
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
    .then(people => this.setState({  people }))
  }
  componentDidMount() {
    this.getPlanets()
    // this.fetchResidentNames()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWapiBox</h1>



        </header>
        <Route path='/' render={() => <OverViewCrawl />} />
        <Route path='/' render={() => <ButtonContainer
                                        getPeople={this.getPeople}
                                        getVehicles={this.getVehicles}
                                        getPlanets={this.getPlanets}
                                        favorites={this.state.favorites}
         />} />
         <Route exact path='/favorites' render={() => <Favorites favorites={this.state.favorites}
           toggleFavorites={this.toggleFavorites}
         />} />
        <Route exact path='/people' render={() => <PeopleCardContainer data={this.state.people}
        toggleFavorites={this.toggleFavorites}/>} />
        <Route exact path='/vehicles' render={() => <VehiclesCardContainer data={this.state.vehicles}
        toggleFavorites={this.toggleFavorites}/>} />
        <Route exact path='/planets' render={() => <PlanetsCardContainer data={this.state.planets}
        toggleFavorites={this.toggleFavorites}/>} />

      </div>
    );
  }
}

export default App;
