import React, { PureComponent } from 'react';
import './App.css';
import Title from './components/Title';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
          <Title content="Codaisseurify" />
          <Title content="Leonard Cohen" />
      </div>
    );
  }
}

export default App;
