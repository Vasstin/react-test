import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {
  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //   return state;
  // }

  // componentWillReceiveProps (props) {
  //   console.log("componentWillReceiveProps")
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("Persons.js shouldComponentUpdate");
  //   if (
  //     nextProps.person !== this.props.person || 
  //     nextProps.changed !== this.props.changed ||
  //     nextProps.clicked !== this.props.clicked
  //     ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("ps.js getSnapshotBeforeUpdate")
    return {message: "Snapshot!"}
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("ps.js componentDidUpdate")
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log("ps.js componentWillUnmount")
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
        isAuth = {this.props.isAuthenticated}
      />
      );
    });
  }
}  

export default Persons;