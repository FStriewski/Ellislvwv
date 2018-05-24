import React, { Component } from 'react';
import './App.css';
import TopBar from './components/topbar/TopBar'
import CarouselContainer from './components/carousel/CarouselContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <CarouselContainer/>
      </div>
    );
  }
}

export default App;
