import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Index from './Index'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          <Index hogs={hogs}/>
      </div>
    )
  }
}

export default App;
