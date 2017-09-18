import * as exampleTemplate from './example.template.json'
import Ad from './types'
import AdTemplateStructure = Ad.AdTemplateStructure
import StylesExtractor from "./StylesExtractor";

const fromJSON = (json: any): AdTemplateStructure => {
  return json as AdTemplateStructure
}

const template = fromJSON(exampleTemplate)

describe('StyleExtractor', () => {
  it('extract styles', () => {
    const extractor = new StylesExtractor(template)
    const styles = extractor.extractStyles()
  })
})
