import Ad from './types'
import ProcessedAdTemplate = Ad.ProcessedAdTemplate
import AdTemplateStructure = Ad.AdTemplateStructure
import * as _ from 'lodash'
import Utils from './utils'
import * as FreeStyle from 'free-style'

interface Options {
  debug?: boolean
}

const preprocess = (
  template: AdTemplateStructure,
  options: Options = {},
): ProcessedAdTemplate => {
  const Style = FreeStyle.create(undefined, options.debug)

  const localTemplate = _.clone(template)

  Utils.applyOnAllElements(localTemplate.root, element => {
    if (element.style) {
      element.uniqueClassName = Style.registerStyle(element.style)
    }
  })

  const result: ProcessedAdTemplate = Object.assign(localTemplate, {
    styleSheet: Style.getStyles()
  })
  return result
}

export default preprocess
