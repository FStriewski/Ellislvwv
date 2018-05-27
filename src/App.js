import React, { Component } from 'react';
import './App.css';
import TopBar from './components/topbar/TopBar'
import CarouselContainer from './components/carousel/CarouselContainer'
import TagContainer from './components/tags/TagContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar />
        <CarouselContainer/>
        <TagContainer/>
      </div>
    );
  }
}

export default App;
