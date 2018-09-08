import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class Aggregate extends Component{
  render(){
    return (
      <div className="aggregate">
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return (
      <div className="filter">
        <img />
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return (
      <div>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 style={{'text-align':'left'}}>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
      </div>
    );
  }
}

export default App;
