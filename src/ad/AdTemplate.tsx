import Ad from './types'
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
import AdImage = Ad.AdImage
import AdTextElement = Ad.AdTextElement
import AdGridElement = Ad.AdGridElement
import AdElement = Ad.AdElement
import AdColumn = Ad.AdColumn
import AdRow = Ad.AdRow
import AdTextButton = Ad.AdTextButton

interface ImageProps {
  image: Ad.AdImage
  className?: string
}

const Image = (props: ImageProps) => {
  let src
  if (props.image.srcKey) {
    src = props.image.srcKey
  } else {
    console.warn('image does not contain supported content')
  }
  return (
    <div className={classNames(props.className)}>
      <MustacheImage src={src} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

interface TextProps {
  className?: string
  text: AdTextElement
}

const Text = (props: TextProps) => {
  return (
    <div className={props.className}>
      <MustacheVariable name={props.text.contentKey} />
    </div>
  )
}

type GridElementProps = {
  element: AdGridElement
  className?: string
}

const GridElement = (props: GridElementProps) => {
  const gridElement: AdGridElement = props.element
  return (
    <div className={classNames(props.className)}>
      <Element element={gridElement} />
    </div>
  )
}

interface ColumnProps {
  column: AdColumn
  className?: string
}

const Column = (props: ColumnProps) => {
  return (
    <div className={classNames(props.className)}>
      {props.column.items.map(element =>
        <Element key={uuid()} element={element} />,
      )}
    </div>
  )
}

interface RowProps {
  row: AdRow
  className?: string
}

const Row = (props: RowProps) => {
  return (
    <div className={classNames(props.className, 'row')}>
      {props.row.items.map(element =>
        <Element key={uuid()} element={element} />,
      )}
    </div>
  )
}

interface TextButtonProps {
  textButton: AdTextButton
  className?: string
}

const TextButton = (props: TextButtonProps) => {
  return (
    <div className={props.className}>
      <p>
        <MustacheVariable name={props.textButton.contentKey} />
      </p>
    </div>
  )
}

interface ElementProps {
  element: AdElement
  className?: string
}
const elementUniqueClassName = ()=>{
  return `eu-${uuid().split('-')[0]}`
}

const Element = (props: ElementProps) => {
  let instance
  const element: AdElement = props.element
  if (!element.uniqueClassName && element.style) {
    element.uniqueClassName = elementUniqueClassName()
  }
  const { type } = element
  if (type === 'image') {
    const image = element as AdImage
    instance = <Image image={image} />
  } else if (type === 'text') {
    const text = element as AdTextElement
    instance = <Text text={text} />
  } else if (type === 'grid-container') {
    const gridContainer = element as AdGridContainer
    if (gridContainer.direction === 'column') {
      const column = gridContainer as AdColumn
      instance = <Column column={column} />
    } else if (gridContainer.direction === 'row') {
      const row = gridContainer as AdRow
      instance = <Row row={row} />
    }
  } else if (type === 'text-button') {
    const textButton = element as AdTextButton
    instance = <TextButton textButton={textButton} />
  } else {
    console.warn(
      `No support for elements type ${type} ${JSON.stringify(props)}`,
    )
    instance = false
  }

  if (!instance) {
    throw `No instance' ${props}`
  }

  if (props.element.columns) {
    instance = React.cloneElement(instance, {
      className: classNames(
        instance.className,
        `col-${props.element.columns}`,
      ),
    })
  }

  instance = React.cloneElement(instance, {
    className: classNames(instance.props.className, props.element.uniqueClassName)
  })

  return instance
}

interface AdTemplateState {}

interface AdTemplateProps {
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
          this.props.template.root.items.map(element => {
            return <Element key={uuid()} element={element} />
          })}
      </div>
    )
  }
}
