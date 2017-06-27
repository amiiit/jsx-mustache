import Ad from './Ad'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {transform} from '../jsx-mustache/transformator'

describe('ad structure', function () {
  it('parse from json', function () {
    const exampleAdDataStructure = require('./ad-example.json')
    const adElement = <Ad ad={exampleAdDataStructure}/>
    const mustache = transform(adElement, {pretty: true})
    const expectedResult = `<div>
  <img src="{{mainimage}}">
  <div class="column">
    <p>
      {{.header}}
    </p>
    <p>
      {{.subtitle}}
    </p>
    <p>
      {{.footer}}
    </p>
  </div>
  <p>
    {{.button_text}}
  </p>
</div>`
    expect(mustache).toBe(expectedResult)

  })
})