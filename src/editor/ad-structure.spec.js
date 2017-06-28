import Ad from './Ad'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {transform} from '../jsx-mustache/transformator'

describe('ad structure', function () {
  it('parse from json', function () {
    const exampleAdDataStructure = {
      "type": "ad",
      "elements": [
        {
          "type": "image",
          "width": 3,
          "content": {
            "type": "variable",
            "value": "mainimage"
          }
        },
        {
          "type": "column",
          "width": 6,
          "content": [
            {
              "type": "text",
              "width": 12,
              "content": {
                "type": "parameter",
                "value": "header"
              }
            },
            {
              "type": "text",
              "width": 12,
              "content": {
                "type": "parameter",
                "value": "subtitle"
              }
            },
            {
              "type": "text",
              "width": 12,
              "content": {
                "type": "parameter",
                "value": "footer"
              }
            }
          ]
        },
        {
          "type": "text",
          "width": 3,
          "content": {
            "type": "parameter",
            "value": "button_text"
          }
        }
      ]
    }
    const adElement = <Ad ad={exampleAdDataStructure}/>
    const mustache = transform(adElement, {pretty: true})
    const expectedResult = `<div>
  <div class="col-3">
    <img src="{{mainimage}}">
  </div>
  <div class="column col-6">
    <div class="col-12">
      {{.header}}
    </div>
    <div class="col-12">
      {{.subtitle}}
    </div>
    <div class="col-12">
      {{.footer}}
    </div>
  </div>
  <div class="col-3">
    {{.button_text}}
  </div>
</div>`
    expect(mustache).toBe(expectedResult)
  })
})