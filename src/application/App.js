import React from 'react'
import cx from './app.scss'
import Editor from '../editor/Editor'
import adStructureExample from '../editor/ad-structure-example.json'
import adDataExample from '../editor/ad-data-example.json'


export default () => {
  return <div className={cx.app}>
    <h1>Aditor</h1>
    <Editor ad={adStructureExample} testData={adDataExample}/>
  </div>
}