import Ad from './Ad'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

describe('ad structure', function () {
  it('parse from json', function () {
    const exampleAdDataStructure = require('./ad-example.json')
    const adElement = <Ad ad={exampleAdDataStructure} />

    console.log(ReactDOMServer.renderToStaticMarkup(adElement))
  })
})