import { Ad } from './types'
import { AdTemplate } from './Ad'

describe('ad serialization', () => {
  it('serialize from object', () => {
    const template: AdTemplate = new AdTemplate('0.0.1', 'testtemplate', {
      id: 'root',
      direction: 'row',
      items: [
        {
          id: 'left',
        },
      ],
    })
    const json = JSON.stringify(template)
    expect(json).toBe("{\"version\":\"0.0.1\",\"id\":\"testtemplate\",\"template\":{\"id\":\"root\",\"direction\":\"row\",\"items\":[{\"id\":\"left\"}]}}")
  })

  it('parse from string', () => {
    const template: AdTemplate = JSON.parse("{\"version\":\"0.0.1\",\"id\":\"testtemplate\",\"template\":{\"id\":\"root\",\"direction\":\"row\",\"items\":[{\"id\":\"left\"}]}}\n")
    expect(template.version).toBe('0.0.1')
  })
})
