import * as React from "react";
import RawTemplateView from "./RawTemplateView";
import RenderedAd from "./RenderedTemplate";
import "./editor.scss";
import Ad from "../ad/types";
import ProcessedAdTemplate = Ad.ProcessedAdTemplate;
import preprocess from "../ad/template-preprocessor";

interface IMyComponentProps {
  template: ProcessedAdTemplate;
  testData: Object;
}

interface IMyComponentState {
  testData: Object;
  template: ProcessedAdTemplate;
}

export default class Editor extends React.Component<
  IMyComponentProps,
  IMyComponentState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      template: props.template || {},
      testData: props.testData || {}
    };
  }

  render() {
    return (
      <div className="editor-root">
        <h3>Raw template</h3>
        <div className="raw-template-wrapper">
          <RawTemplateView template={this.state.template} />
        </div>
        <h3>Rendered ad</h3>
        <div className="rendered-template-wrapper">
          <RenderedAd template={this.state.template} data={this.state.testData} />
        </div>
      </div>
    );
  }
}
