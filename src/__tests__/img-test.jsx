import React from 'react'
import {MustacheLoop, MustacheImage} from '../jsx-mustache'
import ReactDOMServer from 'react-dom/server'

const immg = () => {
  return "{{immage}}"
}

const LoopStart = ({collectionName}) => `{{#${collectionName}}}`
const LoopEnd = ({collectionName}) => `{{/${collectionName}}}`



describe('render img template', () => {
  it('Simple img render', () => {
    // expect(ReactDOMServer.renderToStaticMarkup(<img src="{{ blabla }}"/>)).toBe(`<img src="{{ blabla }}"/>`);
  })

  it('Loop of images', () => {
    const template = (<MustacheLoop collection="offers">
      <MustacheImage src="imgSrc"/>
    </MustacheLoop>)
  })
})