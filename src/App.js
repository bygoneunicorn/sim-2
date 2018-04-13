import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import route from './route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="router">{route}</div>
      </div>
    );
  }
}

export default App;
