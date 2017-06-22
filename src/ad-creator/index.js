import React, {Component} from 'react'
import AdWizardUI from '../ad-wizard-ui'
import transformator from '../jsx-mustache'

export default class AdCreator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      adStructure: {},
      mustacheTemplate: ''
    }
  }

  handleAdStructureChange(adStructure) {
    this.setState({
      adStructure,
      mustacheTemplate: transformator.transform(adStructure)
    })
  }

  render() {
    return <div>
      <AdWizardUI onChange={this.handleAdStructureChange}/>
      <div>
        <pre>{ this.state.mustacheTemplate }</pre>
      </div>
    </div>
  }
}
