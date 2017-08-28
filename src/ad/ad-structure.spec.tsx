import Ad from './Ad'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as hogan from 'hogan.js'
import * as structure from './example.ad_structure.json'
import * as data from './example.ad_data.json'
import {transform} from "../jsx-mustache/transformator";

describe('ad structure', function () {
  it('parse from json', function () {
    const adElement = <Ad ad={structure}/>
    const template = transform(adElement, {pretty: true})
    const expectedResult = `<div class="ad">
  <div class="col-3">
    <img src="{{mainimage}}">
  </div>
  <div class="col-6">
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
    expect(template.trim().replace(/\s/g, '')).toBe(expectedResult.trim().replace(/\s/g, ''))
  })

  it('render html', function () {
    const adElement = <Ad ad={structure}/>
    const template = transform(adElement, {pretty: true})
    const compiled = hogan.compile(template)
    expect(typeof compiled.render).toBe('function')
    const html = compiled.render(data)
  })
})