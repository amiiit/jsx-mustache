import "./app.scss";
import * as React from "react";
import Editor from "../editor/Editor";
import adStructureExample from "../ad/example.template.json";
import adDataExample from "../ad/example.ad_data.json";
import Ad from "../ad/types";
import AdTemplateStructure = Ad.AdTemplateStructure;
import preprocess from '../ad/template-preprocessor'

const fromJSON = (json: object): AdTemplateStructure => {
  return json as AdTemplateStructure
}

const App = (props: { className: string }) => {
  const template = fromJSON(adStructureExample)
  const preprocessedTemplate = preprocess(template)
  return (
    <div id="non" className={props.className}>
      <h1 className="app-title">Aditor</h1>
      <Editor template={preprocessedTemplate} testData={adDataExample} />
    </div>
  );
};

export default App;