import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      {id: "qqweas", name: "Max", age: 28},
      {id: "asdvq", name: "Menu", age: 29},
      {id: "adsqq", name:  "Stephanie", age: 26}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.person];
    persons[personIndex] = person;

    this.setState( {person: persons} )
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person];
    persons.splice(personIndex, 1);
    this.setState({person: persons})
  } 

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "18px",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightgreen",
        color: "black"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
           {this.state.person.map((person, index) => {
              return <Person 
                click = {() => this.deletePersonHandler(index)}
                name = {person.name}
                age = {person.age}
                key = {person.id}
                changed = {(event) => this.nameChangedHandler(event, person.id)}
              />
           })}
        </div>
      );

      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // }
    }

    let classes = [];
    if (this.state.person.length <= 2) {
      classes.push("red") // classes = ["red"]
    }

    if (this.state.person.length <= 1) {
      classes.push("bold") // classes = ["red", "bold"]
    }
    
    return (
        <div className="App">
          <h1>Hi, I`m a React App</h1>
          <p className = {classes.join(" ")}>This is really working!</p>
          <button className = "button" onClick = {this.togglePersonsHandler}>Toggle Persons</button>
              {persons}
        </div>
    );
  }
}

export default App;
