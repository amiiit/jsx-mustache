import * as React from 'react'
import hogan from 'hogan.js'
import {transform} from '../jsx-mustache/transformator'
import Ad from './Ad'

const RenderedTemplate = ({ad, data}) => {
  const mustache = hogan.compile(transform(<Ad ad={ad}/>))
  return <div dangerouslySetInnerHTML={{__html: mustache.render(data)}}/>
}

export default RenderedTemplate