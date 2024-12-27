import React, { Component } from 'react';
import Searchbox from './Searchbox';
import 'tachyons';
import {robots} from './robots';
import CardList from './CardList';
import './App.css'

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
     const filteredRobots= this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    return(
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        < Searchbox searchChange={this.onSearchChange}/>
        < CardList robots={filteredRobots} />
      </div>
    );
  }  
}

export default App;



