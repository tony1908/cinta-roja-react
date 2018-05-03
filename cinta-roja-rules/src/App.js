import React, { Component } from 'react';
import logo from './logo.svg';
import MyFirstComponent from './MyFirstComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MyFirstComponent text={"Holi Devf"} />
          <MyFirstComponent text={"nerjnreu"} />
          <MyFirstComponent text={"vnjdfnvfejvner"} />
          <MyFirstComponent text={"Holi vcfnvef"} />
      </div>
    );
  }
}

export default App;
