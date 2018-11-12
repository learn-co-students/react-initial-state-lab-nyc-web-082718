import React,  { Component, Fragment } from 'react'

class Bomb extends React.Component {

  constructor(props) {
    super(props)
    console.log(props);
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render() {
    return(
      <div>
      {!this.state.secondsLeft ? 'Boom!' : `${this.state.secondsLeft} seconds left before I go boom!`}
    </div>
    )
  }

}

export default Bomb
