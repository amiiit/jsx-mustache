import {MustacheTag, MustacheImage} from '../jsx-mustache'
import React from 'react'
import T from 'prop-types'

const Image = (props) => {
  return <MustacheImage {...props} />
}

const Title = (props) => {
  return <div><MustacheTag content={`${props.name}`}/></div>
}
Title.prototype.propTypes = {
  name: T.string.isRequired
}
export default {Image}