import React, { Component } from 'react';


export default class Bomb extends Component {
  constructor(props){
    super(props)
    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  handleClick = ()=> {
    this.setState({

    }, () => console.log())
  }

  render(){
    return(
      <div>
        {this.state.secondsLeft} before I go boom!
      </div>
    )
  }
}
