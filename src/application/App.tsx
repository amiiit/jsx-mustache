import "./app.scss";
import * as React from "react";
import Editor from "../editor/Editor";
import adStructureExample from "../editor/example.ad_structure.json";
import adDataExample from "../editor/example.ad_data.json";

const App = (props: { className: string }) => {
  return (
    <div id="non" className={props.className}>
      <h1 className="app-title">Aditor</h1>
      <Editor ad={adStructureExample} testData={adDataExample} />
    </div>
  );
};

export default App;
