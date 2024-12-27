import React, { Component } from 'react';
import 'tachyons';
import Searchbox from './Searchbox';
import {robots} from './robots';
import CardList from './CardList';
import './App.css';



class App extends Component {
  constructor () {
    super();
    this.state = {
      robots:robots,
      searchfield:""
    }
  }
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }
  render () {
    const filteredInfo = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1>Robots Family</h1>
        < Searchbox searchChange={this.onSearchChange} />
        <CardList robots={filteredInfo}/>
      </div>
    );
  }
}


export default App;