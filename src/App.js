import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RandomNumbers from "./Person/Person.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <RandomNumbers name="New Number"/>
        <RandomNumbers random="x"/>
      </div>
    );
  }
}

export default App;
// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//                 <header className="App-header">
//                     <img src={logo} className="App-logo" alt="logo" />
//                     <h1 className="App-title">Welcome to React</h1>
//                 </header>
//                 <Person name="John" age="29" />
//                 <Person name="John" age="29" />
//             </div>
//         );
//     }
// }