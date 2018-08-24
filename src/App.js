import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quotes from './Quotes.js';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Random Quote Generator</h1>
      </header>
    );
  }
}

class Quote extends Component {
  render() {
    console.log(Quotes.quotes[0].quote);
    let r = Math.floor(Math.random() * Quotes.quotes.length);
    console.log(r);
    let quote = Quotes.quotes[r].quote;
    // console.log(quotes[0]);
    return (
      <div id="quote-box">
        <h1>Quote</h1>
        <div id="quote">
          <div id="quote-image">
          </div>
          <div id="text">
          { quote }
          </div>
          <div id="author">
          </div>
        </div>
        <div id="buttons">
          <a id="tweet-quote">Tweet</a>
          <button id="new-quote">New Quote!</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Quote />
      </div>
    );
  }
}

export default App;
