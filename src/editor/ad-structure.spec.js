import Ad from './Ad'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {transform} from '../jsx-mustache/transformator'
import hogan from 'hogan.js'

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

describe('ad structure', function () {
  it('parse from json', function () {
    const adElement = <Ad ad={exampleAdDataStructure}/>
    const template = transform(adElement, {pretty: true})
    const expectedResult = `<div>
  <div class="col-3">
    <img src="{{mainimage}}">
  </div>
  <div class="column col-6">
    <div class="col-12">
      {{header}}
    </div>
    <div class="col-12">
      {{subtitle}}
    </div>
    <div class="col-12">
      {{footer}}
    </div>
  </div>
  <div class="col-3">
    {{button_text}}
  </div>
</div>`
    expect(template.trim().replace(/\s+/g, ' ')).toBe(expectedResult.trim().replace(/\s+/g, ' '))
  })


  it('render html', function () {
    const adElement = <Ad ad={exampleAdDataStructure}/>
    const template = transform(adElement, {pretty: true})
    const compiled = hogan.compile(template)
    expect(typeof compiled.render).toBe('function')
    const html = compiled.render({
      mainimage: 'http://image.url',
      header: "Ad header",
      subtitle: "Ad subtitle",
      footer: "Ad footer",
      button_text: "Button text"
    })
    expect(html.trim().replace(/\s+/g, ' ')).toBe(`
<div>
  <div class="col-3">
    <img src="http://image.url">
      </div>
      <div class="column col-6">
        <div class="col-12">
          Ad header
      </div>
      <div class="col-12">
        Ad subtitle
      </div>
      <div class="col-12">
        Ad footer
      </div>
    </div>
    <div class="col-3">
      Button text
    </div>
</div>
`.trim().replace(/\s+/g, ' '))
  })

})