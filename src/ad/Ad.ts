import {Ad} from './types'
import AdGridContainer = Ad.AdGridContainer

export class AdTemplate {
  template: AdGridContainer
  id: string
  version: string

  constructor(version: string, id: string, template: AdGridContainer) {
    this.version = version
    this.id = id
    this.template = template
  }

}
