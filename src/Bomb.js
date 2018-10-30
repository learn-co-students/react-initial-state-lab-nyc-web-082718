// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

  constructor(props) {
   super(props);
   this.state = {
     secondsLeft: this.props.initialCount
   };
  }

  countDown = () => {
    if (this.state.secondsLeft > 0){
      let newSecondsLeft = this.state.secondsLeft
      this.setState({
        secondsLeft: this.state.initialCount--
      }, console.log(newSecondsLeft))
      return newSecondsLeft + " seconds left before I go boom!"
    }
    else {
      return 'Boom!'
    }
  }


  render() {
    return (
      <div>
      {this.countDown()}
      </div>

    )

  }

}
