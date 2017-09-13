import ICSSStyleVariableDeclaration from '../jsx-mustache/CSSStyleVariableDeclaration'

declare namespace Ad {

  interface CSSStyleVariableDeclaration extends ICSSStyleVariableDeclaration {}

  interface AdElement {
    id: string // this just a template id, this element could eventually
               // exist multiple times
    style?: CSSStyleVariableDeclaration
    className?: string
    uniqueClassName: string
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
    items: Array<AdElement>
  }

  interface AdGridElement extends AdElement {
    type: 'grid-element'
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

export default Ad