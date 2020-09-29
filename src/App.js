import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    person: [
      {name: "Max", age: 28},
      {name: "Menu", age: 29},
      {name:  "Stephanie", age: 26}
    ]
  }

  switchNameHandler = () => {
    this.setState({
      person: [
        {name: "Maximilian", age: 28},
        {name: "Menu", age: 29},
        {name:  "Stephanie", age: 27}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I`m a React App</h1>
        <p>This is really working!</p>
        <button onClick = {this.switchNameHandler}>Switch name</button>
         <Person name = {this.state.person[0].name} age = {this.state.person[0].age}/> 
         <Person name = {this.state.person[1].name} age = {this.state.person[1].age}>My Hobbies: Racing</Person>
         <Person name = {this.state.person[2].name} age = {this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
