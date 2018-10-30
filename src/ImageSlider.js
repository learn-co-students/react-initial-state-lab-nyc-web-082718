import React, { Component } from 'react'

export default class ImageSlider extends Component {
  constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }

  currentSlide = () => {
    return `I am on slide ${this.state.currentSlideIndex}`
  }

  render() {
    return (
      <p>{this.currentSlide()}</p>
    )
  }
}
