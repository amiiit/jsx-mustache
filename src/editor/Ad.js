import React, {Component} from 'react'
import {MustacheTag, EmptyWrapper, Loop, MustacheImage, MustacheVariable} from '../jsx-mustache/Components'
import uuid from 'simply-uuid'
import classnames from 'classnames'
import styles from './ad.scss'

const Image = props => {
  let src
  if (props.content.type === 'variable') {
    src = props.content.value
  } else {
    console.warn('image does not contain supported content')
  }
  return <div className={props.className}>
    <MustacheImage src={src}/>
  </div>
}

const Text = props => {
  return <div className={props.className}>
    <MustacheVariable name={props.content.value}/>
  </div>
}

const Column = props => {
  return <div className={classnames(props.className)}>
    {
      props.content.map(element => <Element key={uuid.generate()} {...element}/>)
    }
  </div>
}

const Element = props => {
  let instance
  const {type} = props
  if (type === 'image') {
    instance = <Image {...props}/>
  } else if (type === 'text') {
    instance = <Text {...props} />
  } else if (type === 'column') {
    instance = <Column content={props.content}/>
  }
  else {
    console.warn(`No support for elements type ${props.type}`)
    instance = false
  }

  if (!instance) {
    throw `No instance' ${props}`
  }

  if (props.width) {
    const className = `col-${props.width}`
    instance = React.cloneElement(instance, {
      className: classnames(instance.props.className, styles && styles[className] || className)
    })
  }
  return instance
}

const Ad = (props) => {
  return <div className={classnames(styles && styles['row'] || 'row')}>
    {
      props.ad.elements.map(element => <Element key={uuid.generate()} {...element}/>)
    }
  </div>
}

export default Ad