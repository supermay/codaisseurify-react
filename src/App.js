import React, { PureComponent } from 'react';
import './App.css';
import Title from './components/Title';
import ArtistsContainer from './components/ArtistsContainer'

const artists = [
  {
    name: "Leonard Cohen",
    country: 'Canada',
    isBand: false,
  },
  {
    name: "Beatles",
    country: 'The UK',
    isBand: true,
  },
  {
    name: "Jay Chou",
    country: 'China',
    isBand: false,
  },
]


class App extends PureComponent {
  render() {
    return (
      <div className="App">
          <Title content="Codaisseurify" />
          <ArtistsContainer artists={artists} />
      </div>
    );
  }
}

export default App;
