import React, {Component} from 'react'
import RawTemplateView from './RawTemplateView'
import RenderedAd from './RenderedTemplate'

export default class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ad: this.props.ad || {},
      testData: this.props.testData || {}
    }
  }

  render() {
    return <div className=''>
      <RawTemplateView ad={this.state.ad}/>
      <RenderedAd ad={this.state.ad} data={this.state.testData}/>
    </div>
  }
}