import React from 'react'
import {storiesOf} from '@kadira/storybook';
import adExample from './ad-example.json'
import RawTemplateView from './RawTemplateView'
import RenderedAd from './RenderedTemplate'
import {transform} from '../jsx-mustache/transformator'
import Ad from '../editor/Ad'
import hogan from 'hogan.js'
import Editor from './Editor'

storiesOf('UI', module)
  .add('Show template', () => (
    <RawTemplateView ad={adExample.structure}/>
  ))
  .add('Show rendered ad', () => {
    const template = hogan.compile(transform(<Ad ad={adExample.structure}/>))
    return <RenderedAd template={template} data={adExample.data}/>
  })
  .add('Editor', () => {
    return <Editor ad={adExample.structure} testData={adExample.data}/>
  })
