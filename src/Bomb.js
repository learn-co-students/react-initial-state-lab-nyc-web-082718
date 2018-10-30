import React, { Component } from 'react'


export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  boomFunction = () => {
    if (this.state.secondsLeft > 0) {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    } else {
      return 'Boom!'
    }
  }

  render() {
    return (
      <p>{this.boomFunction()}</p>
    )
  }
}
