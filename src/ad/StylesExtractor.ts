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
  template: AdTemplateStructure

  constructor(template: AdTemplateStructure) {
    this.template = template
  }

  extractStyles(): Array<SelectorStylePair> {
    const items = Utils.flattenTemplate(this.template)
    const styledElements = items.filter(item => item.style)
    return styledElements.map((styledElement: AdElement) => {
      return {
        style: styledElement.style,
        selector: `.${styledElement.uniqueClassName}`,
      }
    })
  }
}
