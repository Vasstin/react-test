import React, { useEffect } from 'react';

import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => {
    console.log("cockpit.js useEffect");

    setTimeout(() => {
      alert("Saved data to cloud!")
    }, 1000);
    return () => {
      console.log("cockpit.js cleanup work in useeffect")
    }
  }, [])

  const assignedClasses = [];
  let btnClass = "";
  if(props.showPersons) {
    btnClass = classes.Red;
  }
  

  if (props.person.length <= 2) {
    assignedClasses.push(classes.red) // assignedClasses = ["red"]
  }

  if (props.person.length <= 1) {
    assignedClasses.push(classes.bold) // assignedClasses = ["red", "bold"]
  }

  return(
    <div className = {classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className = {assignedClasses.join(" ")}>This is really working!</p>
      <button 
        className = {btnClass} 
        onClick = {props.clicked}>Toggle Persons</button>
    </div>
  )
}

export default cockpit;