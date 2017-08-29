import * as React from 'react'
import {transform} from '../jsx-mustache/transformator'
import hogan from 'hogan.js'
import RenderedTemplate from './RenderedTemplate'
import {Ad} from "../ad/types";
import AdTemplate from '../ad/AdTemplate'
declare const hogan: {
  compile(string)
}

interface RenderedAdProps {
  ad: Ad.AdTemplateStructure
}

const RenderedAd = ({ad}: RenderedAdProps) => {
  const template = hogan.compile(transform(<AdTemplate template={ad}/>))
  return <h1>bla</h1> //<RenderedTemplate template={template} data={data}/>
}
export default RenderedAd