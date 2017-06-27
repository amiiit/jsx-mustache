import React, {Component} from 'react'
import {MustacheTag, EmptyWrapper, Loop, MustacheImage, MustacheVariable} from '../jsx-mustache/Components'
import uuid from 'simply-uuid'

const Image = props => {
  let src
  if (props.content.type === 'variable') {
    src = props.content.value
  } else {
    console.warn('image does not contain supported content')
  }
  return <MustacheImage src={src}/>
}

const Text = props => {
  return <p>
    <MustacheVariable name={props.content.value} />
  </p>
}

const abstractElement = props => {

}

const Element = props => {
  let instance
  const {type} = props
  if (type === 'image') {
    instance = <Image {...props}/>
  } else if (type === 'text') {
    instance = <Text {...props} />
  } else if (type === 'column') {
    instance = <div className="column"/>
  }
  else {
    console.warn(`No support for elements type ${props.type}`)
    instance = false
  }

  !instance && console.log('instance', instance)
  return instance
}

const Ad = (props) => {
  return <div>
    {
      props.ad.elements.map(element => <Element key={uuid.generate()} {...element}/>)
    }
  </div>
}

export default Ad