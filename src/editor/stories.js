import React from 'react'
import {storiesOf} from '@kadira/storybook';
import adExampleStructure from './ad-structure-example.json'
import adExampleData from './ad-data-example.json'
import RawTemplateView from './RawTemplateView'
import RenderedAd from './RenderedTemplate'
import {transform} from '../jsx-mustache/transformator'
import Ad from '../editor/Ad'
import hogan from 'hogan.js'
import Editor from './Editor'

storiesOf('UI', module)
  .add('Show template', () => (
    <RawTemplateView ad={adExampleStructure}/>
  ))
  .add('Show rendered ad', () => {
    const template = hogan.compile(transform(<Ad ad={adExampleStructure}/>))
    return <RenderedAd template={template} data={adExampleData}/>
  })
  .add('Editor', () => {
    return <Editor ad={adExampleStructure} testData={adExampleData}/>
  })
