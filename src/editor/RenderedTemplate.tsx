import * as React from 'react'
import hogan from 'hogan.js'
import {transform} from '../jsx-mustache/transformator'
import AdTemplate from '../ad/AdTemplate'
import Ad from "../ad/types";
import ProcessedAdTemplate = Ad.ProcessedAdTemplate;
import TemplateStyle from './TemplateStyle'

interface RenderedTemplateInterface {
  template: ProcessedAdTemplate
  data: object
}

const RenderedTemplate = (props: RenderedTemplateInterface) => {
  const transformedTemplate = transform(<AdTemplate template={props.template}/>)
  const mustacheTemplate: string = transformedTemplate.markup
  const compiledTemplate = hogan.compile(mustacheTemplate)
  const markupString = compiledTemplate.render(props.data)

  // const styles = StylesExtractor.extractStyles(props.template)
  console.log('styles', props.template.styleSheet)
  return <div>
    <TemplateStyle template={props.template}/>
    <div dangerouslySetInnerHTML={{__html: compiledTemplate.render(props.data)}}/>
  </div>
}

export default RenderedTemplate