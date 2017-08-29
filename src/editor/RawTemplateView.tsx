import * as React from 'react'
import { transform } from '../jsx-mustache/transformator'
import AdTemplate from '../ad/AdTemplate'

import {CSSProperties} from "react";
import {Ad} from "../ad/types";

interface RawTemplateViewProps {
  template: Ad.AdTemplateStructure
}

const RawTemplateView = (props: RawTemplateViewProps) => {
  const template = transform(<AdTemplate template={props.template} />)
  return (
    <div>
      <pre>
        {template}
      </pre>
    </div>
  )
}

export default RawTemplateView