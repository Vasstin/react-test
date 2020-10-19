import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //   return state;
  // }

  // componentWillReceiveProps (props) {
  //   console.log("componentWillReceiveProps")
  // }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Persons.js shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ps.js getSnapshotBeforeUpdate")
    return {message: "Snapshot!"}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ps.js componentDidUpdate")
    console.log(snapshot);
  }
  
  render() {
    return this.props.person.map((person, index) => {
      return ( 
      <Person 
        click = {() => this.props.clicked(index)}
        name = {person.name}
        age = {person.age}
        key = {person.id}
        changed = {(event) => this.props.changed(event, person.id)}
      />
      );
    });
  }
}  

export default Persons;