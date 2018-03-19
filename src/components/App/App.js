import React, { Component } from 'react';
import OverViewCrawl from '../OverViewCrawl/OverViewCrawl';
import './App.css';

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
      </div>
    );
  }
}

export default App;
