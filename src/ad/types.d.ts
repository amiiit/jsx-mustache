import {CSSProperties} from "react";

declare namespace Ad {

  interface AdElement {
    id: string
    style?: CSSProperties
    targetURL?: URL
  }

  interface AdImage extends AdElement {
    src: string
  }

  interface AdTextElement extends AdElement {
  }

  interface AdTextType {
    content: string
    targetId: string
  }

  interface AdGridContainer extends AdGridElement {
    direction: string // row or column
    items: Array<AdGridElement>
  }

  interface AdGridElement extends AdElement {
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
}
