import { Ad } from './types'
import AdGridContainer = Ad.AdGridContainer
import * as React from 'react'
import {
  MustacheTag,
  EmptyWrapper,
  Loop,
  MustacheImage,
  MustacheVariable,
} from '../jsx-mustache/Components'
import * as uuid from 'uuid/v4'
import * as classNames from 'classnames'
import './ad.scss'

const Image = props => {
  let src
  if (props.content.type === 'variable') {
    src = props.content.value
  } else {
    console.warn('image does not contain supported content')
  }
  return (
    <div className={classNames(props.className)}>
      <MustacheImage src={src} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

const Text = props => {
  return (
    <div className={props.className}>
      <MustacheVariable name={props.content.value} />
    </div>
  )
}

const Column = props => {
  return (
    <div className={classNames(props.className)}>
      {props.content.map(element => <Element key={uuid()} {...element} />)}
    </div>
  )
}

const Element = props => {
  let instance
  const { type } = props
  if (type === 'image') {
    instance = <Image {...props} />
  } else if (type === 'text') {
    instance = <Text {...props} />
  } else if (type === 'column') {
    instance = <Column content={props.content} />
  } else {
    console.warn(`No support for elements type ${props.type}`)
    instance = false
  }

  if (!instance) {
    throw `No instance' ${props}`
  }

  if (props.width) {
    const className = `col-${props.width}`
    instance = React.cloneElement(instance, {
      className: classNames(instance.props.className || className),
    })
  }
  return instance
}

interface AdTemplateState {}

interface AdTemplateProps  {
  className?: string
  template: Ad.AdTemplateStructure
}

  export default class AdTemplate extends React.Component<
  AdTemplateProps,
  AdTemplateState
> {
  constructor(props) {
    super(props)
    this.props = props
  }

  render() {
    return (
      <div className={this.props.className || 'ad'}>
        {this.props.template.root &&
          this.props.template.root.items.map(element =>
            <Element key={uuid()} {...element} />,
          )}
      </div>
    )
  }
}
