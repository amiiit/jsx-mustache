import * as React from 'react'
import {MustacheTag, EmptyWrapper, Loop, MustacheImage, MustacheVariable} from '../jsx-mustache/Components'
import * as uuid from 'uuid/v4'
import classnames from 'classnames'
import * as cx from './ad.scss'

const Image = props => {
  let src
  if (props.content.type === 'variable') {
    src = props.content.value
  } else {
    console.warn('image does not contain supported content')
  }
  return <div className={classnames(props.className, cx.locals.image)}>
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
      props.content.map(element => <Element key={uuid()} {...element}/>)
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
      className: classnames(instance.props.className, cx && cx[className] || className)
    })
  }
  return instance
}

const Ad = (props) => {
  return <div className={classnames(cx && cx['ad'] || 'ad')}>
    {
      props.ad.elements.map(element => <Element key={uuid()} {...element}/>)
    }
  </div>
}

export default Ad