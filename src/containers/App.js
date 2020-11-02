import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context'

class App extends Component {
  state = {
    person: [
      {id: "qqweas", name: "Max", age: 28},
      {id: "asdvq", name: "Menu", age: 29},
      {id: "adsqq", name:  "Stephanie", age: 26}
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log("app.js getDerivedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("app.js componentDidMount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("app.js shouldComponentUpdate");
    return true;
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

    this.setState((prevState, props) => {
      return { 
        person: persons,
        changeCounter: prevState.changeCounter + 1
      }
    })
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

  loginHandler = () => {
    this.setState({authenticated: true})
  }

  render() {
    let persons = null;
    

    if (this.state.showPersons) {
      persons = <Persons 
            person = {this.state.person}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler} 
            isAuthenticated = {this.state.authenticated}
            />
    }

    return (
      <Aux>
        <button onClick = {() => {
          this.setState({ showCockpit: false });
        }}>Remove Cockpit
        </button>
        <AuthContext.Provider 
          value = {{
            authenticated: this.state.authenticated,
            login: this.loginHandler
          }}>
          {this.state.showCockpit ? (
          <Cockpit 
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            personLength = {this.state.person.length}
            clicked = {this.togglePersonsHandler}
            />
          ) : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App) ;
