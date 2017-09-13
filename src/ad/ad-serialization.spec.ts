import Ad from './types'
import AdTemplate from './AdTemplate'
import * as fs from 'fs'

describe('ad serialization', () => {
  it('serialize from object', () => {
    const template: AdTemplate = new AdTemplate({
      version: '0.0.1',
      id: 'testtemplate',
      template: {
        id: 'root',
        direction: 'row',
        items: [
          {
            id: 'left',
          },
        ],
      },
    })
    const json = JSON.stringify(template.props)
    expect(json).toBe(
      '{"version":"0.0.1","id":"testtemplate","template":{"id":"root","direction":"row","items":[{"id":"left"}]}}',
    )
  })

  it('parse from string', () => {
    const fromFile = fs.readFileSync('./src/ad/example.template.json', 'utf-8')
    const template: Ad.AdTemplateStructure = JSON.parse(fromFile)
    expect(template.version).toBe('0.0.1')
  })
})
