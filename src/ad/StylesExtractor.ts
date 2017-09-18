import Ad from './types'
import AdTemplateStructure = Ad.AdTemplateStructure
import AdElement = Ad.AdElement
import CSSStyleVariableDeclaration = Ad.CSSStyleVariableDeclaration
import Utils from './utils'


interface SelectorStylePair {
  selector: string
  style: CSSStyleVariableDeclaration
}

interface Styles {
  declarations: Array<SelectorStylePair>
}

export default class StylesExtractor {

  static extractStyles(template: AdTemplateStructure): Array<SelectorStylePair> {
    const items = Utils.flattenTemplate(template)
    const styledElements = items.filter(item => item.style)
    return styledElements.map((styledElement: AdElement) => {
      return {
        style: styledElement.style,
        selector: `.${styledElement.uniqueClassName}`,
      }
    })
  }
}
