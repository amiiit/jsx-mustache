import * as exampleTemplate from './example.template.json'
import Ad from './types'
import AdTemplateStructure = Ad.AdTemplateStructure
import StylesExtractor from "./StylesExtractor";

const fromJSON = (json: any): AdTemplateStructure => {
  return json as AdTemplateStructure
}

const template = fromJSON(exampleTemplate)

describe('StyleExtractor', () => {
  it('extract elements', () => {
    const extractor = new StylesExtractor(template)
    const elements = extractor.extractAllElements()
    const nestedItems = ['subtitle','abovebutton']
    const firstDepthItems = ['right','middle']
    const ids = elements.map(el=>el.id)
    expect(ids).toEqual(expect.arrayContaining([...nestedItems, ...firstDepthItems]))
  })

  it('extract styles', () => {
    const extractor = new StylesExtractor(template)
    const styles = extractor.extractStyles()
    console.log('styles', JSON.stringify(styles))
  })
})
