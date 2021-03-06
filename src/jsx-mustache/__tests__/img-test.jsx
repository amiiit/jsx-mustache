import React from 'react'
import {Loop, MustacheImage} from '../Components'
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
    const template = (
      <Loop collection="offers">
        <MustacheImage src="image"/>
      </Loop>)
  })
})