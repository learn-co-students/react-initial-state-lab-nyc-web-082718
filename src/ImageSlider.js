import React,  { Component, Fragment } from 'react'
 // your ImageSlider code here!

class ImageSlider extends React.Component {

  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  render() {
    return(
      <React.Fragment>
      {`I am on slide ${this.state.currentSlideIndex}`}
    </React.Fragment>
    )
  }

}

export default ImageSlider
