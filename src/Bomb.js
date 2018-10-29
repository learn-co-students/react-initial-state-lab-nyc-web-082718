import React, { Component } from 'react'

export default class Bomb extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount,
    }
  }

  boom() {
    const time = this.state.secondsLeft
    if (time === 0) {
      return 'Boom!'
    } else {
      return `${time} seconds left before I go boom!`
    }
  }

  render() {
    return (
      <div>
        {this.boom()}
      </div>
    )
  }
}
