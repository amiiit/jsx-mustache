import AdTemplate from './AdTemplate'
import * as React from 'react'
import * as ReactDOMServer from 'react-dom/server'
import * as hogan from 'hogan.js'
import * as exampleTemplate from './example.template.json'
import * as data from './example.ad_data.json'
import {transform} from "../jsx-mustache/transformator";
import Ad from "./types";
import AdTemplateStructure = Ad.AdTemplateStructure;

const fromJSON = (json: any): AdTemplateStructure => {
  return json as AdTemplateStructure
}

describe('ad structure', function () {
  it('parse from json', function () {
    const adElement = <AdTemplate template={fromJSON(exampleTemplate)}/>
    const template = transform(adElement, {pretty: true})
    const expectedResult = `
<div class="ad">
    <div class="col-3">
        <img src="{{mainimage}}" style="width:100%;height:100%;">
    </div>
    <div class="col-6">
        <div>{{header}}</div>
        <div>{{subtitle}}</div>
        <div>{{footer}}</div>
    </div>
    <div class="col-3">
        <div>{{price}}</div>
        <div><p>{{offerbutton}}</p></div>
    </div>
</div>`
    expect(template.trim().replace(/\s/g, '')).toBe(expectedResult.trim().replace(/\s/g, ''))
  })

  it('render html', function () {
    const adElement = <AdTemplate template={fromJSON(exampleTemplate)}/>
    const template = transform(adElement, {pretty: true})
    const compiled = hogan.compile(template)
    expect(typeof compiled.render).toBe('function')
    const html = compiled.render(data)
  })
})