import React, { Component } from 'react';
import './App.css';
import EventItem from './components/carousel/EventItem'

class App extends Component {
  render() {
    return (
      <div className="App">
      <EventItem/>
      </div>
    );
  }
}

export default App;
