// your ImageSlider code here!
import React, { Component } from 'react';
export default class ImageSlider extends Component {
  constructor(prop){
    super(prop)
    this.state = {
      currentSlideIndex: 0
    }
  }
  render(){
    return (
      <h2>I am on slide {this.state.currentSlideIndex}</h2>
    )
  }

}
