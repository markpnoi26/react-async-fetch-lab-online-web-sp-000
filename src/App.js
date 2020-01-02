// create your App component here
import React from 'react'

export default class App extends React.Component {
  
  componentDidMount() {
    fetch('http://api.open-no')
  }
  
  render() {
    return(
      <h1>I am in the app now </h1>  
    )
  }
  
}