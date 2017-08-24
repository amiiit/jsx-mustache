import * as React from 'react'
import {transform} from '../jsx-mustache/transformator'
import Ad from './Ad'

const RawTemplateView = ({ad}) => {
  const template = transform(<Ad ad={ad}/>)
  return <div>
    <pre>
    { template }
    </pre>
  </div>
}

export default RawTemplateView