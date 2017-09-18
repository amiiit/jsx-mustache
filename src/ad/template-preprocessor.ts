import Ad from './types'
import AdTemplateStructure = Ad.AdTemplateStructure
import * as _ from 'lodash'

const preprocess = (template: AdTemplateStructure): AdTemplateStructure => {
  const localTemplate = _.clone(template)


  return localTemplate

}

export {preprocess}