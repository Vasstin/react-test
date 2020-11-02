import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css'
import AuthContext from '../../context/auth-context'

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("cockpit.js useEffect");
    // setTimeout(() => {
    //   alert("Saved data to cloud!")
    // }, 1000);
    toggleBtnRef.current.click()
    return () => {
      console.log("cockpit.js cleanup work in useeffect")
    }
  }, []);

  const assignedClasses = [];
  let btnClass = "";
  if(props.showPersons) {
    btnClass = classes.Red;
  }
  

  if (props.personLength <= 2) {
    assignedClasses.push(classes.red) // assignedClasses = ["red"]
  }

  if (props.personLength <= 1) {
    assignedClasses.push(classes.bold) // assignedClasses = ["red", "bold"]
  }

  return(
    <div className = {classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className = {assignedClasses.join(" ")}>This is really working!</p>
      <button ref = {toggleBtnRef} className = {btnClass} onClick = {props.clicked}>
          Toggle Persons
      </button>
      <AuthContext.Consumer>
        {context => <button onClick = {context.login}>Log in</button> }
      </AuthContext.Consumer>
    </div>
  )
}

export default React.memo(cockpit);