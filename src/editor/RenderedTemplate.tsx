import * as React from 'react'
import hogan from 'hogan.js'
import {transform} from '../jsx-mustache/transformator'
import AdTemplate from '../ad/AdTemplate'
import Ad from "../ad/types";
import AdTemplateStructure = Ad.AdTemplateStructure;

interface RenderedTemplateInterface {
  template: AdTemplateStructure
  data: object
}

const RenderedTemplate = (props: RenderedTemplateInterface) => {
  const mustacheTemplate: string = transform(<AdTemplate template={props.template}/>).markup
  const compiledTemplate = hogan.compile(mustacheTemplate)
  return <div dangerouslySetInnerHTML={{__html: compiledTemplate.render(props.data)}}/>
}

export default RenderedTemplate