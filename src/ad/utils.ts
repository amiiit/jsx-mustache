import Ad from './types'
import AdElement = Ad.AdElement
import AdGridContainer = Ad.AdGridContainer
import AdTemplateStructure = Ad.AdTemplateStructure

const extractAllElementsNonUnique = (
  container: AdGridContainer,
  items: Array<AdElement> = [],
): Array<AdElement> => {
  if (!container.items || !container.items.length) {
    return items
  }
  const subitems: Array<Array<AdElement>> = container.items
    .filter(item => item.hasOwnProperty('items'))
    .map(container =>
      extractAllElementsNonUnique(container as AdGridContainer),
    )
  return container.items.concat([container], ...subitems)
}

export default class Utils {
  static flattenTemplate(template: AdTemplateStructure): Array<AdElement> {
    const result = []
    new Set<AdElement>(
      extractAllElementsNonUnique(template.root),
    ).forEach(el => {
      result.push(el)
    })
    return result
  }

  static applyOnAllElements(container: AdGridContainer, func) {
    if (!container.items || !container.items.length) {
      func(container)
    } else {
      container.items.forEach(container => {
        this.applyOnAllElements(container as AdGridContainer, func)
      })
    }
  }
}
