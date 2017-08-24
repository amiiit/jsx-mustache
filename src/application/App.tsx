import * as React from 'react'
import * as cx from './app.scss'
import Editor from '../editor/Editor'
import adStructureExample from '../editor/example.ad_structure.json'
import adDataExample from '../editor/example.ad_data.json'


const App = () => {
  return <div className={cx.locals.app}>
    <h1>Aditor</h1>
    <Editor ad={adStructureExample} testData={adDataExample}/>
  </div>
}

export default App