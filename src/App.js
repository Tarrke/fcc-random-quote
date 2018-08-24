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
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: ''
    };
    this.newQuote = this.newQuote.bind(this);
  }
  newQuote() {
    let r = Math.floor(Math.random() * Quotes.quotes.length);
    let quote = Quotes.quotes[r].quote;
    this.setState({currentQuote: quote});
  }
  // We should display a quote at begin
  componentWillMount() {
    this.newQuote();
  }
  render() {
    // console.log(quotes[0]);
    return (
      <div id="quote-box">
        <h1>Quote</h1>
        <div id="quote">
          <div id="quote-image">
          </div>
          <div id="text">
          { this.state.currentQuote }
          </div>
          <div id="author">
          </div>
        </div>
        <div id="buttons">
          <a id="tweet-quote">Tweet</a>
          <button id="new-quote" onClick={this.newQuote}>New Quote!</button>
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
