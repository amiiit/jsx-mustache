// @flow
import React from 'react'
import cx from './app.scss'
import Editor from '../editor/Editor'
import adExample from '../editor/ad-example.json'


export default () => {
  return <div className={cx.app}>
    <h1>Aditor</h1>
    <Editor ad={adExample.structure} testData={adExample.data}/>
  </div>
}