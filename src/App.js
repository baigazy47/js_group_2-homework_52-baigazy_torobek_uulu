import React, { Component } from 'react';
import './App.css';
// import RandomNumbers from "./Person/Person.js";
import Number from './Numbers/Number'

class App extends Component {
    state = {
        numbers: [0, 0, 0, 0, 0]
    }
    handleClick = () => {
        let i = 5;
        let numbers = [];
        while (i > 0) {
            const rand = Math.floor(Math.random() * (37 - 5) + 5);
            if (numbers.indexOf() === -1) {
                numbers.push(rand);
                i--;
            }
        }
        this.setState({numbers});
    }

    render() {
        return (
            <div>
                <button className="btn_numbers" onClick={this.handleClick}>New Numbers</button>
                <Number number={this.state.numbers[0]} />
                <Number number={this.state.numbers[1]} />
                <Number number={this.state.numbers[2]} />
                <Number number={this.state.numbers[3]} />
                <Number number={this.state.numbers[4]} />
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