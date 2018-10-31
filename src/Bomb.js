// your Bomb code here!
import React, { Component } from 'react';
export default class Bomb extends Component {
  constructor(prop){
    super(prop)
    this.state= {
      secondsLeft :this.props.initialCount
    }
  }
    render(){
      const text = this.state.secondsLeft === 0? 'Boom!' :`${this.state.secondsLeft} seconds left before I go boom!`
      return(
        <h2>{text}
        </h2>
      )
    }

}
