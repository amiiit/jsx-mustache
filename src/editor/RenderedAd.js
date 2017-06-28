import React from 'react'
import {transform} from '../jsx-mustache/transformator'
import hogan from 'hogan.js'
import RenderedTemplate from './RenderedTemplate'

const RenderedAd = ({ad, data}) => {
  const template = hogan.compile(transform(<Ad ad={ad}/>))
  return <h1>bla</h1> //<RenderedTemplate template={template} data={data}/>
}
export default RenderedAd