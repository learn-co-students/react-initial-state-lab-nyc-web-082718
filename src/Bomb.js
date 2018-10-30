// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {

  constructor(props) {
    super(props) //why do we need a prop? SOS!
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

    alert = () => {
    if(this.state.secondsLeft === 0) {
      return 'Boom!'
    }
    else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }// end of alert function

  render() {
    return (
      <div>{this.alert()}</div> //call by reference
    )
  }





}
