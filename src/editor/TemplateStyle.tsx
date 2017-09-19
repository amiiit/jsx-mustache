import * as React from 'react'
import Ad from '../ad/types'
import ProcessedAdTemplate = Ad.ProcessedAdTemplate

interface Props {
  template: ProcessedAdTemplate,
}

const TemplateStyle = (props: Props)=>{
  return (<style type="text/css">
      {props.template.styleSheet}
    </style>
  )}

export default TemplateStyle
