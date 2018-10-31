// your ImageSlider code here!
import React, { Component } from 'react'
// import Bomb from './Bomb'

class ImageSlider extends Component {

  // constructor(){
  //   super()
  //     this.state = {
  //       currentSlideIndex: 0
  //     }
  // }

  state = {
    currentSlideIndex: 0
  }

  render() {
    return(
      <div>I am on slide {this.state.currentSlideIndex}</div>
    )

  }


}
// we have to set initialCount props in here to pass down to Bomb

export default ImageSlider
