import React, {Component} from 'react'
import {MustacheImage} from '../ad-components'

export default class AdWizardUI extends Component {

  constructor(props) {
    super(props)
    this.state = {
      adStructure: {
        elements: []
      }
    }
  }

  addElementToState(element) {
    console.log('element', element)
  }

  handleInsertImage = () => {
    this.addElementToState(<Image/>)
  }
  handleInsertTitle = () => {
    this.addElementToState()
  }
  handleInsertSubTitle = () => {

  }
  handleInsertOfferButton = () => {

  }

  render() {
    return <div>
      <button onClick={this.handleInsertImage}>insert image</button>
      <button onClick={this.handleInsertTitle}>insert title</button>
      <button onClick={this.handleInsertSubTitle}>insert sub title</button>
      <button onClick={this.handleInsertOfferButton}>insert offer button</button>
    </div>
  }
}