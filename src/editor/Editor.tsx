import * as React from "react";
import RawTemplateView from "./RawTemplateView";
import RenderedAd from "./RenderedTemplate";
import "./editor.scss";

interface IMyComponentProps {
  ad: Object;
  testData: Object;
}

interface IMyComponentState {
  testData: Object;
  ad: Object;
}

export default class Editor extends React.Component<
  IMyComponentProps,
  IMyComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      ad: props.ad || {},
      testData: props.testData || {}
    };
  }

  render() {
    return (
      <div className="editor-root">
        <h3>Raw template</h3>
        <div className="raw-template-wrapper">
          <RawTemplateView ad={this.state.ad} />
        </div>
        <h3>Rendered ad</h3>
        <div className="rendered-template-wrapper">
          <RenderedAd ad={this.state.ad} data={this.state.testData} />
        </div>
      </div>
    );
  }
}
