import {CSSProperties} from "react";

declare namespace Ad {

  interface AdElement {
    id: string
    style?: CSSProperties
    className?: string
    targetURLKey?: string
    type: string
    columns?: number
  }

  interface DisplayElement extends AdElement{
  }

  export interface AdImage extends DisplayElement {
    type: 'image'
    srcKey: string
  }

  interface AbstractAdTextElement extends DisplayElement {
    contentKey: string
  }

  interface AdTextElement extends AbstractAdTextElement {
    type: 'text'
  }

  interface AdTextButton extends AbstractAdTextElement {
    type: 'text-button'
  }

  interface AdGridContainer extends AdGridElement {
    direction: string // row or column
    items: Array<AdGridElement>
  }

  interface AdGridElement extends AdElement{
    type: 'grid-element'
    content: AdElement
  }

  interface AdRow extends AdGridContainer {
    direction: 'row'
  }

  interface AdColumn extends AdGridContainer {
    direction: 'column'
  }

  interface AdLayoutElement {
    children: Array<AdElement> | AdElement
  }

  export interface AdTemplateStructure {
    root: AdGridContainer,
    version: string
  }
}