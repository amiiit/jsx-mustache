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
  it('render html', function () {
    const adElement = <AdTemplate template={fromJSON(exampleTemplate)}/>
    const template = transform(adElement, {pretty: true})
    const compiled = hogan.compile(template)
    expect(typeof compiled.render).toBe('function')
    const html = compiled.render(data)
  })
})