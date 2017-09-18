import Ad from './types'
import AdTemplateStructure = Ad.AdTemplateStructure
import * as _ from 'lodash'
import Utils from './utils'
import hash from 'string-hash'

interface Options {
  setIdAsClass?: boolean
}

const preprocess = (template: AdTemplateStructure, options: Options = {}): AdTemplateStructure => {
  const rainbowTable = {}

  const localTemplate = _.clone(template)
  Utils.applyOnAllElements(localTemplate.root, element => {
    if (element.style) {
      let className
      const serializedStyle = JSON.stringify(element.style).replace(/\s/,'')
      console.log('options.setIdAsClass',options.setIdAsClass)
      if (options.setIdAsClass){
        className = element.id
      } else {
        const hashedNumber = Number(hash(serializedStyle))
        className = hashedNumber.toString(16)
      }

      if (!rainbowTable[className]) {
        rainbowTable[className] = serializedStyle
      } else if (rainbowTable[className] != serializedStyle){
        throw `Hash duplicates ${className}`
      }

      element.uniqueClassName = className
    }
  })

  return localTemplate
}

export default preprocess