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
  const mustache = hogan.compile(transform(<AdTemplate template={props.template}/>))
  return <div dangerouslySetInnerHTML={{__html: mustache.render(props.data)}}/>
}

export default RenderedTemplate