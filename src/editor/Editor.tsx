import * as React from 'react'
import RawTemplateView from './RawTemplateView'
import RenderedAd from './RenderedTemplate'
import Ad from "./Ad";


interface IMyComponentProps {
  ad: Ad,
}

interface IMyComponentState {
  testData: string,
  ad: Ad,
}

export default class Editor extends React.Component<IMyComponentProps, IMyComponentState> {
  constructor(props: any) {
    super(props)
    this.state = {
      ad: props.ad || {},
      testData: props.testData || {}
    }
  }

  render() {
    return <div className=''>
      <RawTemplateView ad={this.state.ad}/>
      <RenderedAd ad={this.state.ad} data={this.state.testData}/>
    </div>
  }
}