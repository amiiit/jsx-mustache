import Ad from './types'
import AdGridContainer = Ad.AdGridContainer
import AdTextElement = Ad.AdTextElement
import AdTemplateStructure = Ad.AdTemplateStructure
import AdImage = Ad.AdImage
import GridContainer = Ad.AdGridContainer
import Utils from './utils'

const header: AdTextElement = {
  id: 'title',
  type: 'text',
  contentKey: 'header',
  style: {
    color: 'green',
  },
}

const subtitle: AdTextElement = {
  id: 'subtitle',
  type: 'text',
  contentKey: 'subtitle',
}

const footer: AdTextElement = {
  id: 'shortlink',
  type: 'text',
  contentKey: 'footer',
  targetURLKey: 'offerlink',
}

const middle: GridContainer = {
  id: 'middle',
  type: 'grid-container',
  direction: 'column',
  columns: 6,
  items: [header, subtitle, footer],
}

const image: AdImage = {
  id: 'creative',
  type: 'image',
  columns: 3,
  srcKey: 'mainimage',
}

describe('utils', () => {
  it('apply function on all items', () => {
    const template: AdTemplateStructure = {
      version: '0.0.1',
      id: 'testtemplate',
      root: {
        id: 'root',
        type: 'grid-container',
        direction: 'row',
        items: [image, middle],
      },
    }
    Utils.applyOnAllElements(template.root,(elem: AdTextElement)=>{
      if (elem.style){
        elem.uniqueClassName = 'superunique'
      }
    })
    const gridContainer: AdGridContainer = template.root.items[1]
    expect(gridContainer.items[0].uniqueClassName).toEqual('superunique')
  })
})
