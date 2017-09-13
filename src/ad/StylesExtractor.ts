import Ad from './types'
import AdTemplateStructure = Ad.AdTemplateStructure
import AdGridContainer = Ad.AdGridContainer
import AdElement = Ad.AdElement
import CSSStyleVariableDeclaration = Ad.CSSStyleVariableDeclaration

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

  extractAllElementsNonUnique(
    container: AdGridContainer,
    items: Array<AdElement> = [],
  ): Array<AdElement> {
    if (!container.items || !container.items.length) {
      return items
    }
    const subitems: Array<Array<AdElement>> = container.items
      .filter(item => item.hasOwnProperty('items'))
      .map(container =>
        this.extractAllElementsNonUnique(container as AdGridContainer),
      )
    return container.items.concat([container], ...subitems)
  }

  extractAllElements(): Array<AdElement> {
    const result = []
    new Set<AdElement>(
      this.extractAllElementsNonUnique(this.template.root),
    ).forEach(el => {
      result.push(el)
    })
    return result
  }

  extractStyles(): Array<SelectorStylePair> {
    const items = this.extractAllElements()
    const styledElements = items.filter(item => item.style)
    return styledElements.map((styledElement: AdElement) => {
      return {
        style: styledElement.style,
        selector: `.${styledElement.uniqueClassName}`,
      }
    })
  }
}
