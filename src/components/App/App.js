import React, { Component } from 'react';
import OverViewCrawl from '../OverViewCrawl/OverViewCrawl';
import './App.css';
import ButtonContainer from '../ButtonContainer/ButtonContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starWars: []

    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Lawson's SwampiBox</h1>
        </header>

        <OverViewCrawl />
        <ButtonContainer />
      </div>
    );
  }
}

export default App;
