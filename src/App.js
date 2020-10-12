import React, { Component } from 'react';
import classes from './App.css';
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
    let persons = null;
    let btnClass = "";

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
      
      btnClass = classes.Red;
      
    }

    let assignedClasses = [];
    if (this.state.person.length <= 2) {
      assignedClasses.push(classes.red) // assignedClasses = ["red"]
    }

    if (this.state.person.length <= 1) {
      assignedClasses.push(classes.bold) // assignedClasses = ["red", "bold"]
    }

    return (
        <div className = {classes.App}>
          <h1>Hi, I`m a React App</h1>
          <p className = {assignedClasses.join(" ")}>This is really working!</p>
          <button className = {btnClass} onClick = {this.togglePersonsHandler}>Toggle Persons</button>
              {persons}
        </div>
    );
  }
}

export default App;
