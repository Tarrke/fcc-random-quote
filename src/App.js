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
      currentQuote: '',
      currentAuthor: ''
    };
    this.newQuote = this.newQuote.bind(this);
    this.render = this.render.bind(this);
  }
  newQuote() {
    let r = Math.floor(Math.random() * Quotes.quotes.length);
    let quote = Quotes.quotes[r];
    this.setState( {currentQuote: quote.quote, currentAuthor: quote.author} );
  }
  // We should display a quote at begin
  componentWillMount() {
    this.newQuote();
  }
  render() {
    // console.log(quotes[0]);
    let tweetMessage = this.state.currentQuote + '\n--' + this.state.currentAuthor
    let tweetLink = 'https://twitter.com/intent/tweet?text=' + escape(tweetMessage) 
    tweetLink += '&hastag=%23StarWars&via=Tarrke'
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
          { this.state.currentAuthor }
          </div>
        </div>
        <div id="buttons">
          <a id="tweet-quote" href= { tweetLink } target="_blank">Tweet</a>
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
